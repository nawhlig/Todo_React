from rest_framework.serializers import ModelSerializer
from .models import Students, Scores


class StudentsSerializer(ModelSerializer):
    class Meta:
        model = Students
        fields = ["name", "address", "email"]


class ScoresSerializer(ModelSerializer):
    class Meta:
        model = Scores
        fields = "__all__"