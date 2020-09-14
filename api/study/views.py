from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import Students, Scores
from .serializers import StudentsSerializer, ScoresSerializer
from rest_framework.response import Response


# Create your views here.

# get 방식으로 만들겠다.
@api_view(["GET"])
def StudentView(request):
    qs = Students.objects.all()
    serializer = StudentsSerializer(qs, many=True)  # qs의 결과가 리스트형이면 True, 오브젝트 형이면 False
    return Response(serializer.data)


@api_view(["GET"])
def ScoreView(request):
    qs = Scores.objects.all()
    serializer = ScoresSerializer(qs, many=True)
    return Response(serializer.data)