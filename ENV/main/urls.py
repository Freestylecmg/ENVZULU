from django.urls import path 
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('login', views.login, name='login'),
    path('register', views.register, name='register'),
    path('log', views.log, name='log'),
    path('stats', views.stats, name='stats'),
    path('logout', views.logout, name='logout'),
    
            
]