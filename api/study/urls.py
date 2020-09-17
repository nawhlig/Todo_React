from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register("students", views.StudentView)  # 2개의 URL을 만들어준다.
router.register("scores", views.ScoresView)

urlpatterns = [
    path("", include(router.urls)),
    # path("basicserializer/students", views.StudentBasicView),
    # path("basicserializer/students/<pk>", views.StudentBasicDetailView),
    # path("basicserializer/scores", views.ScoresBasicView),
    # path("basicserializer/scores/<pk>", views.ScoresBasicDetailView),
    # testscore
    #
    # path("students/", views.StudentView),
    # path("students/<id>", views.StudentDetailView),
    # path("scores/", views.ScoreView),
    # path("scores/<id>", views.ScoreDetailView),
    #
    # path("students/", views.StudentView.as_view()),
    # path("students/<id>", views.StudentDetailView.as_view()),
    #
    # path("scores/", views.ScoresView.as_view()),
    # path("scores/<id>", views.ScoresDetailView.as_view()),
]
