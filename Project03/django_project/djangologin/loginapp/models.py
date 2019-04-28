# loginapp/models.py
from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class UserProfileInfo(models.Model):
	user = models.OneToOneField(User,on_delete=models.CASCADE) #Delete everything that references it if this referenced object is deleted. A one-to-one relationship. 
                                                                   
def __str__(self):
	return self.user.username


