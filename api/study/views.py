from django.http import Http404
from django.shortcuts import render, get_object_or_404
from .models import Students, Scores
from .serializers import (
    StudentsSerializer,
    ScoresSerializer,
    StudentBasicSerializer,
    ScoresBasicSerializer,
)
from rest_framework import status, viewsets
from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet
from rest_framework.views import APIView
from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


# Create your views here.

###################################################################################################################
#  View -set : 클래스 유형                                                                                         #
###################################################################################################################
class StudentView(ModelViewSet):
    queryset = Students.objects.all()
    serializer_class = StudentsSerializer
    #permission_classes=[IsAuthenticated]

    # def get_queryset(self):
    #     qs = super().get_queryset()
    #     name = self.request.query_params.get("name")
    #     math = self.request.query_params.get('math')
    #     science = self.request.query_params.get('science')
    #     if name:
    #         qs = qs.filter(name=name)
    #     if math:
    #         qs = qs.filter(math__gt=math)
    #     return qs

    # #기본URL/incheon
    # @action(detail=False, methods=["GET"])
    # def incheon(self, request):
    #     qs = self.get_queryset().filter(address__contains="인천")  # like '%인천%'
    #     serializer = self.get_serializer(qs, many=True)
    #     return Response(serializer.data)

    # #기본URL/pk/init
    # @action(detail=True, methods=["PUT"])
    # def init(self, request, pk):
    #     instance = self.get_object()
    #     instance.address = ""
    #     instance.email = ""
    #     instance.save(update_fields=["address", "email"])
    #     serializer = self.get_serializer(instance)
    #     return Response(serializer.data)


class ScoresView(ModelViewSet):
    queryset = Scores.objects.all()  # 전체데이터를 조회하는
    serializer_class = ScoresSerializer

    # #오버라이딩
    # def get_queryset(self):
    #        #Scores.objects.all()
    #     qs = super().get_queryset() # SELECT * FROM scores
    #
    #     name = self.request.query_params.get("name")
    #     math = self.request.query_params.get("math")
    #     english = self.request.query_params.get("english")
    #     science = self.request.query_params.get("science")
    #     order = self.request.query_params.get("order")
    #     if name:
    #         qs = qs.filter(name=name)   # SELECT * FROM scores WHERE name = name
    #     if math:
    #         qs = qs.filter(math__gte=math)
    #     if english:
    #         qs = qs.filter(english__gte=english)
    #     if science:
    #         qs = qs.filter(science__gte=science)
    #     if order:
    #         qs = qs.order_by(order)
    #     return qs

    # #PUT, DETAIL GET, DELETE (PK)
    # #LIST, LIST 0, 1, >=
    # @action(detail=False, methods=["GET"])
    # def top(self, request):
    #     qs = self.get_queryset().filter(
    #         math__gte=80, english__gte=80, science__gte=80
    #     )  # 각각의 점수 모두 80점 이상
    #     serializer = self.get_serializer(qs, many=True)
    #     return Response(serializer.data)


####################################################################################################################
##  CBV방식 : 클래스로 뷰를 만드는 방법                                                                              #
####################################################################################################################
# class StudentView(APIView):
#     def get(self, request):
#         qs = Students.objects.all()
#         serializer = StudentsSerializer(qs, many=True)
#         return Response(serializer.data)

#     def post(self, request):
#         serializer = StudentsSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# class StudentDetailView(APIView):
#     def get_object(self, id):
#         return get_object_or_404(Students, pk=id)

#     def get(self, request, id):
#         qs = self.get_object(id)
#         serializer = StudentsSerializer(qs)
#         return Response(serializer.data)

#     def put(self, request, id):
#         qs = self.get_object(id)
#         print(request.data)
#         serializer = StudentsSerializer(qs, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     def delete(self, request, id):
#         qs = self.get_object(id)
#         qs.delete()
#         return Response(status=204)


# class ScoresView(APIView):
#     def get(self, request):
#         qs = Scores.objects.all()  # 메모리 요소 , DB
#         serializer = ScoresSerializer(qs, many=True)  # 메모리 → 텍스트
#         return Response(serializer.data)

#     def post(self, request):
#         serializer = ScoresSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)  # 저장된걸 응답
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# class ScoresDetailView(APIView):
#     def get_object(self, id):
#         return get_object_or_404(Scores, pk=id)

#     def get(self, request, id):
#         qs = self.get_object(id)
#         serializer = ScoresSerializer(qs)
#         return Response(serializer.data)

#     def put(self, request, id):
#         qs = self.get_object(id)
#         print(request.data)
#         serialzer = ScoresSerializer(qs, data=request.data)
#         if serialzer.is_valid():
#             serialzer.save()
#             return Response(serialzer.data)
#         return Response(serialzer.errors, status=status.HTTP_400_BAD_REQUEST)

#     def delete(self, request, id):
#         qs = self.get_object(id)
#         qs.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)


###################################################################################################################
#  FBV방식 : 함수로 뷰를 만드는 방법                                                                                #
###################################################################################################################

# @api_view(["GET", "POST"])  # get과 POST 방식으로 만들겠다. 는 의미
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
#         qs = Scores.objects.all() #전체데이터 조회, 리스트형식이 반환 []
#         serializer = ScoresSerializer(qs, many=True)
#         print(serializer.data)
#         return Response(serializer.data)
#     elif request.method == "POST":
#         serializer = ScoresSerializer(data=request.data) #직렬화 생성, 딕셔너리 비슷한형태
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


###################################################################################################################
#  FBV방식 : 뷰의 기본형식으로 작성법                                                                                             #
###################################################################################################################
# @api_view(["GET", "POST"])
# def StudentBasicView(request):
#     if request.method == "GET":
#         student = Students.objects.all()
#         serializer = StudentBasicSerializer(student, many=True)
#         return Response(serializer.data)
#     elif request.method == "POST":
#         serializer = StudentBasicSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()  # serializer.save()가 동작하면 serializers.py 의 def create(self, validated_date): 가 실행됨
#             return Response(serializer.data, status=201)
#         return Response(serializer.errors, status=400)


# @api_view(["PUT"])
# def StudentBasicDetailView(request, pk):
#     if request.method == "PUT":
#         student = Students.objects.get(pk=pk)
#         serializer = StudentBasicSerializer(student, data=request.data)
#         # student 원래데이터
#         # request.data 사람이 보내준 데이터
#         if serializer.is_valid():
#             serializer.save()
#             # (원래데이터 <- 사람이 보내준 데이터) -> SAVE
#             return Response(serializer.data)
#         return Response(serializer.errors, status=400)


# @api_view(["GET", "POST"])
# def ScoresBasicView(request):
#     if request.method == "GET":
#         scores = Scores.objects.all()
#         serializer = ScoresBasicSerializer(scores, many=True)
#         return Response(serializer.data)
#     elif request.method == "POST":
#         serializer = ScoresBasicSerializer(data=request.data)
#         if serializer.is_valid():
#             # 가공
#             serializer.save(
#                 memo="이건 테스트 입니다."
#             )  # serializer.save()가 동작하면 serializers.py 의 def create(self, validated_date): 가 실행됨
#             return Response(serializer.data, status=201)
#         return Response(serializer.errors, status=400)


# @api_view(["PUT"])
# def ScoresBasicDetailView(request, pk):
#     if request.method == "PUT":
#         scores = Scores.objects.get(pk=pk)
#         # scores 원래데이터
#         # request.data 사람이 보내준 데이터
#         # (원래데이터 <- 사람이 보내준 데이터) -> SAVE
#         serializer = ScoresBasicSerializer(scores, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=400)