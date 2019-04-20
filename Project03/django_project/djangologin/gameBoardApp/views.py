from django.shortcuts import render
from .models import Post

# Create your views here.

def createpost(request):
        if request.method == 'POST':
            if request.POST.get('title') and request.POST.get('content'):
                post=Post()
                post.title= request.POST.get('title')
                post.content= request.POST.get('content')
                post.save()
                
                return render(request, 'gameBoardApp/playgame.html')  

        else:
                return render(request,'gameBoardApp/leaderboard.html')

def showboard(request): 
    allscores= Post.objects.all()
    context= {'allscores': allscores}
    return render(request, 'gameBoardApp/scoreboard.html', context)
