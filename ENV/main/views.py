import email
from django.shortcuts import render, redirect
from django.contrib.auth.models import User, auth
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .models import Day

def index(request):
    return render(request, 'index.html')

def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = auth.authenticate(username=username, password=password)
        
        if user is not None:
            auth.login(request, user)
            return redirect('/')
        else:
            messages.info(request, 'Oops! Credentials Invalid')
            return redirect('login')
    else:
     return render(request, 'login.html')

def register(request):
    if request.method == 'POST':
        email = request.POST['email']
        username = request.POST['username']
        password = request.POST['password']

        if User.objects.filter(email=email).exists():
                messages.info(request, 'Oops! Email Already Used')
                return redirect('register')
        elif User.objects.filter(username=username).exists():
            messages.info(request, 'Oops! Username Already Used') 
            return redirect('register') 
        else:
            user = User.objects.create_user(username = username, email = email, password = password)
            user.save(); 
            return redirect('login')
    else:
         return render(request, 'register.html')

def logout(request):
    auth.logout(request)
    return redirect('/')

@login_required(login_url='login')
def survey(request):
    if request.method == "POST":
        water = request.POST['water']
        trash = request.POST['trash']
        co2 = request.POST['co2']
        energy = request.POST['energy']
        current_user = request.user

        new_day = Day.objects.create(user = current_user, trash=trash, water=water,co2=co2,energy=energy)
        new_day.save()
        return redirect('stats')
    return render(request, 'survey.html')

@login_required(login_url='login')
def stats(request):
    day = Day.objects.get(user=request.user)
    return render(request, 'stats.html',{'day': day})