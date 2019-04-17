"""djangologin URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url,include
from loginapp import views

urlpatterns = [
    path('e/daiy29/admin/', admin.site.urls),
    url(r'^e/daiy29/$',views.index,name='index'),
    url(r'^e/daiy29/special/',views.special,name='special'),
    url(r'^e/daiy29/loginapp/',include('loginapp.urls')),
    url(r'^e/daiy29/logout/$', views.user_logout, name='logout'),
]
