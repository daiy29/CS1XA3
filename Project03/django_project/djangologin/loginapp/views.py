# loginapp/views.py
from django.shortcuts import render
from loginapp.forms import UserForm 
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect, HttpResponse
from django.urls import reverse
from django.contrib.auth.decorators import login_required
def index(request):
    return render(request,'loginapp/index.html') #Home
@login_required
def special(request):
    return HttpResponse("You are logged in !") #Notification
@login_required
def user_logout(request): #Log out, redirect to homepage
    logout(request)
    return HttpResponseRedirect(reverse('index'))
def register(request): # POST request to register
    registered = False
    if request.method == 'POST':
        user_form = UserForm(data=request.POST) 
        if user_form.is_valid():  #If form filled out correctly, (default character requirements)
            user = user_form.save()  #Store info in database and register user
            user.set_password(user.password)
            user.save()
            registered = True
        else:
          print(user_form.errors) 
    else:
        user_form = UserForm()
      
    return render(request,'loginapp/registration.html',
                          {'user_form':user_form,
                           'registered':registered})
def user_login(request): #POST request to log in
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')   #Prompt to check credentials
        user = authenticate(username=username, password=password)
        if user:
            if user.is_active:
                login(request,user)
                return HttpResponseRedirect(reverse('index')) #Log in user
            else:
                return HttpResponse("Your account was inactive.")
        else: #Incorrect login prompt
            print("Incorrect Login.")
            print("Attemped username: {} and password: {}".format(username,password))
            return HttpResponse("Invalid login details given")
    else:
        return render(request, 'loginapp/login.html', {})
