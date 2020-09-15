from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("students", views.StudentView)
router.register("scores", views.ScoresView)

urlpatterns = [
    path("", include(router.urls))
    # path("students/", views.StudentView),
    # path("students/", views.StudentView.as_view()),
    # path("students/<id>", views.StudentDetailView),
    # path("students/<id>", views.StudentDetailView.as_view()),
    # path("scores/", views.ScoreView),
    # path("scores/", views.ScoresView.as_view()),
    # path("scores/<id>", views.ScoreDetailView),
    # path("scores/<id>", views.ScoresDetailView.as_view()),
]
