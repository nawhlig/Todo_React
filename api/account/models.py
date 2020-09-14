from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

# 기본 유저의 모델을 상속받고 컬럼2개 추가
class User(AbstractUser):
    phone_number = models.CharField(max_length=13)
    profile = models.ImageField(blank=True, null=True)