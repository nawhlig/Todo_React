from django.db import models

#######################################################################################
#                       유저계정 조인할 때  임포트 방법                                 #
# 일반적으로 조인하기 위해서 모델스의 유저 테이블 추가 하는 방법도 있지만                  #
# 예)from account.models import User                                                  #
# 장고에서 유저모델이 변경되는것을 고려해 만든 계정관련 모듈을 추가하면                    #
# settings.py 나 common.py 에 AUTH_USER_MODEL 에 정의해논 유저모델을 가져올 수 있음      #
# 예) AUTH_USER_MODEL = account.USER 로 정의하면                                      #
#     from django.contrib.auth import get_user_model 로 선언해서 사용가능              #
#######################################################################################
from django.contrib.auth import get_user_model


# Create your models here.


class Students(models.Model):
    name = models.CharField(max_length=10)
    address = models.CharField(max_length=50)
    email = models.CharField(max_length=30)
    memo = models.CharField(max_length=300, null=True)
    reg_user = models.ForeignKey(
        get_user_model(), on_delete=models.CASCADE
    )  # 외래키 지정할 때 삭제했을 때의 규칙도 지정해 주어야 함!!


class Scores(models.Model):
    name = models.CharField(max_length=10)
    math = models.IntegerField()
    english = models.IntegerField()
    science = models.IntegerField()
    reg_user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
