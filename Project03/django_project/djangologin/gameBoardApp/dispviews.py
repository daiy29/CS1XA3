from django.shortcuts import render
from .models import Post
from django.db.models.functions import Length

# Create your views here.


# Createpost method sends post request with username and score to page used to access
def createpost(request):
        if request.method == 'POST':
            if request.POST.get('title') and request.POST.get('content'):
                post=Post()
                post.title= request.POST.get('title')
                post.content= request.POST.get('content')
                post.save()
                
                return render(request, 'gameBoardApp/playgame.html')  

        else:
                return render(request,'gameBoardApp/playgame.html')

# Showboard method prints all the content in our database, and orders it by descending scores, excluding scores of 0. Credits to Nicholas Robertson for figuring out how to order the scores.
def showboard(request):
    allrows = Post.objects.all().values('title','content').order_by(Length('content').desc(), '-content').exclude(content=0)
    context={'allrows': allrows}
    return render(request, 'gameBoardApp/scoreboard.html',context) # shows leaderboard in scoreboard.html
