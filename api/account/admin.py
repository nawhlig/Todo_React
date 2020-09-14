from django.contrib import admin
from .models import User

# Register your models here.
@admin.register(User)  # 관리자 페이지에서 유저관리하기
class UserAdmin(admin.ModelAdmin):
    # 관리자 페이지 Account→Users 에서 보여줄 항목 정의하기
    list_display = ["username", "email", "phone_number"]
    # 관리자 페이지 Account→Users 에서 보여줄 항목 클릭하게 하기
    list_display_links = ["username", "email", "phone_number"]