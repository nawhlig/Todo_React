from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from django.contrib.auth import get_user_model

User = get_user_model()

class SignupSerializers(ModelSerializer):
    
    password = serializers.CharField(write_only=True)
    
    class Meta:
        model = User
        fields = ["username", "password", "email", "phone_number"]

    def create(self, validated_data):
        user = user.objects.create(
            username = validated_data["username"],
            email = validated_data["email"],
            phone_number = validated_data["phone_number"]
        )

        #중요!!
        user.set_password(validated_data["password"])
        user.save()
        return user
