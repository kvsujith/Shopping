from django import forms
from django.core import validators
from django.contrib.auth.models import auth

class Login(forms.Form):

    username = forms.CharField(label="Username", required=True, widget=forms.TextInput(
        attrs={
            "class": "a",
        }))

    password = forms.CharField(label="password", required=False, widget=forms.PasswordInput(
        attrs={
            "class": "one  text-grey  ",
            'id ': 'myid',
            "style": "display:block",

        }
    ))


    def clean_username(self, *args, **kwargs):
        username = self.cleaned_data.get('username')
        if not auth.objects.filter(username=username).exists():
            raise forms.ValidationError("Account Doesn't Exist")
        else:
            return username

