from django.shortcuts import render
from .models import Post
from django.db.models.functions import Length

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
                return render(request,'gameBoardApp/playgame.html')

def showboard(request):
    allrows = Post.objects.all().values('title','content').order_by(Length('content').desc(), '-content').exclude(content=0)
    context={'allrows': allrows}
    return render(request, 'gameBoardApp/scoreboard.html',context)
