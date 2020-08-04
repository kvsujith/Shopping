from django.contrib import messages
from django.core.mail import send_mail
from django.http import HttpResponseRedirect
from django.shortcuts import render, redirect
from Shopping.settings import EMAIL_HOST_USER
from django.contrib.auth.models import User,auth


# Create your views here.
def register(request):
    if request.method=='POST':
        fname = request.POST['fname']
        lname = request.POST['lname']
        email  = request.POST['email']
        username = email
        phone  = request.POST['phone']
        password1  = request.POST['pswd1']
        password2  = request.POST['pswd2']

        if password1==password2:

            if User.objects.filter(username=username).exists():
                messages.info(request,'Email is Already taken')
                return redirect('/accounts/register#about')
            else:
                user = User.objects.create_user(username=username, first_name=fname, last_name=lname, email=email,
                                                password=password1)
                user.save()
                print('user created')

                subject = 'Welcome to E-Shopping'
                message = f"Your Account has been  CREATED Successfully...<br>Have a great day! Thanks {fname} "
                recepient = email
                send_mail(subject,
                          message, EMAIL_HOST_USER, [recepient], fail_silently=True)
                return  redirect('/accounts/login')
        else:
            messages.info(request,'Password Miss match')
            return redirect('/accounts/register#about')
    else:
        return render(request,'register.html')

def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = auth.authenticate(username=username, password=password)
        if user is not None:
            auth.login(request, user)

            return HttpResponseRedirect('/')

        else:
            messages.info(request, 'Invalid credentials')
            print('Invalid credentials')
            return render(request, 'login.html')


    return render(request,'login.html')

def logout(request):
    auth.logout(request)
    print('logout')
    return redirect('/')








