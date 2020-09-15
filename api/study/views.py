from django.shortcuts import render, get_object_or_404
from .models import Students, Scores
from .serializers import StudentsSerializer, ScoresSerializer
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.

###################################################################################################################
#  CBV방식 : 클래스로 뷰를 만드는 방법                                                                                #
###################################################################################################################
class StudentView(APIView):
    def get(self, request):
        qs = Students.objects.all()
        serializer = StudentsSerializer(qs, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = StudentsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class StudentDetailView(APIView):
    def get_object(self, id):
        return get_object_or_404(Students, pk=id)

    def get(self, request, id):
        qs = self.get_object(id)
        serializer = StudentsSerializer(qs)
        return Response(serializer.data)

    def put(self, request, id):
        qs = self.get_object(id)
        print(request.data)
        serializer = StudentsSerializer(qs, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        qs = self.get_object(id)
        qs.delete()
        return Response(status=204)


class ScoresView(APIView):
    def get(self, request):
        qs = Scores.objects.all()  # 메모리 요소 , DB
        serializer = ScoresSerializer(qs, many=True)  # 메모리 → 텍스트
        return Response(serializer.data)

    def post(self, request):
        serializer = ScoresSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)  # 저장된걸 응답
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ScoresDetailView(APIView):
    def get_object(self, id):
        return get_object_or_404(Scores, pk=id)

    def get(self, request, id):
        qs = self.get_object(id)
        serializer = ScoresSerializer(qs)
        return Response(serializer.data)

    def put(self, request, id):
        qs = self.get_object(id)
        print(request.data)
        serialzer = ScoresSerializer(qs, data=request.data)
        if serialzer.is_valid():
            serialzer.save()
            return Response(serialzer.data)
        return Response(serialzer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        qs = self.get_object(id)
        qs.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


###################################################################################################################
#  FBV방식 : 함수로 뷰를 만드는 방법                                                                                #
###################################################################################################################
# # get과 POST 방식으로 만들겠다.
# @api_view(["GET", "POST"])
# def StudentView(request):
#     if request.method == "GET":
#         qs = Students.objects.all()
#         serializer = StudentsSerializer(qs, many=True)  # qs의 결과가 리스트형이면 True, 오브젝트 형이면 False
#         return Response(serializer.data)
#     elif request.method == "POST":
#         # 직렬화 생성
#         serializer = StudentsSerializer(data=request.data)
#         # 유효성 검사
#         if serializer.is_valid():
#             # 저장
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)  # 저장한 데이터, 상태메시지 리턴
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# @api_view(["GET", "PUT", "DELETE"])
# def StudentDetailView(request, id):
#     qs = get_object_or_404(Students, pk=id)
#     # 상세조회
#     if request.method == "GET":
#         serializer = StudentsSerializer(qs)
#         return Response(serializer.data)
#     # 수정
#     elif request.method == "PUT":
#         serializer = StudentsSerializer(qs, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=400)
#     # 삭제
#     elif request.method == "DELETE":
#         qs.delete()
#         return Response(status=204)


# @api_view(["GET", "POST"])
# def ScoreView(request):
#     if request.method == "GET":
#         qs = Scores.objects.all()
#         serializer = ScoresSerializer(qs, many=True)
#         return Response(serializer.data)
#     elif request.method == "POST":
#         serializer = ScoresSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# @api_view(["GET", "PUT", "DELETE"])
# def ScoreDetailView(request, id):
#     qs = get_object_or_404(Scores, pk=id)

#     if request.method == "GET":
#         serialzer = ScoresSerializer(qs)
#         return Response(serialzer.data)

#     elif request.method == "PUT":
#         serialzer = ScoresSerializer(qs, data=request.data)
#         if serialzer.is_valid():
#             serialzer.save()
#             return Response(serialzer.data)
#         return Response(serialzer.errors, status=status.HTTP_400_BAD_REQUEST)

#     elif request.method == "DELETE":
#         qs.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)