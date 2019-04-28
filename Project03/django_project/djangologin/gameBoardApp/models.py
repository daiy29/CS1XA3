from django.db import models

# Create your models here.

class Post(models.Model):
    title= models.CharField(max_length=300)
    content= models.TextField()
#  This is a model containing the database of usernames and scores for use in the scoreboard
