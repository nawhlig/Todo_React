from django.shortcuts import render
from .serializers import SignupSerializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User


# Create your views here.

@api_view(["GET", "POST"])
def signup(request):
    if request.method == 'GET':
        users = SingupSerializer(User.objects.all(), many=True)
        return Response(users.data)

    elif request.method == 'POST':
        signup = SingupSerializer(data=request.data)
        if signup.is_valid():
            signup.save()
            return Response(signup.data, status=201) 

