# loginapp/urls.py
from django.conf.urls import url
from loginapp import views
# SET THE NAMESPACE!
app_name = 'loginapp'
# Be careful setting the name to just /login use userlogin instead!
urlpatterns=[
    url(r'^register/$',views.register,name='register'), #registration page
    url(r'^user_login/$',views.user_login,name='user_login'), #login page
]
