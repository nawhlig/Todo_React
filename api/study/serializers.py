from rest_framework import serializers
from rest_framework.serializers import ModelSerializer, Serializer
from rest_framework.validators import ValidationError
from django.contrib.auth import get_user_model
from account.models import User
from .models import Students, Scores
import re


class UserSerializer(ModelSerializer):
    class Meta:
        model = User #get_user_model()
        fields = ['username','email','phone_number']


class StudentsSerializer(ModelSerializer):
    # reg_user_username = serializers.ReadOnlyField(source='reg_user.username')
    # reg_user_email = serializers.ReadOnlyField(source='reg_user.email')
    
    # def get_test(self, obj):
    #     return '내이름은 ' + obj.name

    # def get_test2(self, obj):
    #     return '오호정'

    #reg_user = UserSerializer(read_only=True) #등록때 사용하지않겠다.
    # reg_user_username = serializers.ReadOnlyField(source='reg_user.username')
    # reg_user_email = serializers.ReadOnlyField(source='reg_user.email')

    # test = serializers.SerializerMethodField()

    # def get_test(self, obj):
    #     return obj.address + " (" + obj.name + ")"

    class Meta:
        model = Students
        fields = '__all__'

    def validate_email(self, value):
        result = re.match("[a-zA-Z0-9]+@[a-zA-Z.0-9]+", value)
        if result == None:
            raise ValidationError("이메일 형식을 확인해주세요")
        return value


    def validate_phone_number(self, value):
        result = re.match("[0-9]{3}-[0-9]{3,4}-[0-9]{3,4}", value)
        if result == None:
            raise ValidationError("전화번호 형식이 맞지않습니다.")
        return value

class ScoresSerializer(ModelSerializer):
    # reg_user = UserSerializer()
    username = serializers.ReadOnlyField(source="reg_user.username")
    email = serializers.ReadOnlyField(source="reg_user.email")
    phone_number = serializers.ReadOnlyField(source='reg_user.phone_number')

    class Meta:
        model = Scores
        fields = ['name','math','science','english','reg_user','username','email','phone_number']

    # # 이런것도 가능
    # # reg_date 데이터가 있다면
    # reg_date = serializers.DateField(format="%Y")
    # data_sum = serializers.SerializerMethodField()
    # # 합계도 가능
    # def get_data_sum(self, obj):
    #     return obj.math + obj.science + obj.english

    ###################### validate체크!!!!####################################
    # #항목 하나 하나  체크용
    # def validate_name(self, value):
    #     # 정규표현식, 숫자체크 용도로 활용
    #     if len(vlaue) > 3:
    #         raise ValidationError("3글자 이상 입력해주세요!")
    #     return value

    # #항목 여러개 체크용
    # 체크 결과는 위아래 같지만 에러메시지표현이 아래는 항목안나옴
    # def validate(self, value):
    #     if len(value["name"]) < 3:
    #         raise ValidationError("3글자 이상 입력해 주세요!")
    #     return value

    def validate_math(self, math):
        if not(0 < math < 100):
            raise ValidationError("0~100 사이만 입력해주세요!")
        return math

class StudentBasicSerializer(Serializer):
    name = serializers.CharField()
    address = serializers.CharField()
    email = serializers.CharField()

    # DB에 직접등록
    def create(self, validated_data):
        Students.objects.create()
        return Students.objects.create(**validated_data)
        # 위 return 구문을 풀어 해석하면 아래와 같다
        # return Students.objects.create(name=validated_data['name'], address=validated_data['address'])

    # student, data=request.data
    # inctance 원래데이터 (student)
    # validated_data 사람이 보내준 데이터 (data=request.data)
    # (원래데이터 <- 사람이 보내준 데이터) -> SAVE
    def update(self, instance, validated_data):
        instance.name = validated_data.get("name", instance.name)
        instance.address = validated_data.get("address", instance.name)
        instance.email = validated_data.get("email", instance.name)
        instance.save()
        return instance


class ScoresBasicSerializer(Serializer):
    name = serializers.CharField()
    math = serializers.IntegerField()
    english = serializers.IntegerField()
    science = serializers.IntegerField()

    # DB에 직접등록
    def create(self, validated_data):
        Scores.objects.create()
        return Scores.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name", instance.name)
        instance.math = validated_data.get("math", instance.math)
        instance.english = validated_data.get("english", instance.english)
        instance.science = validated_data.get("science", instance.science)
        instance.save()
        return instance