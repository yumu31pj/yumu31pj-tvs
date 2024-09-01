from django.contrib import admin
from .models import CustomUser

class CustomUserAdmin(admin.ModelAdmin):

    list_display = (
        "email",
        "username",
        "last_name",
        "first_name",
        "is_staff",
        "is_active",
        "date_joined",
        "note",
    )

    list_filter = (
        "email",
        "is_staff",
        "is_active",
    )

    search_fields = ("email",)

    ordering = ("email",)

    basic = ("username", "email", "password")
    personal = ("last_name", "first_name", "date_joined")
    auth = ("is_staff", "is_active")

    fieldsets = (
        ("BasicInfo", {"fields": basic}),
        ("Personal", {"fields": personal}),
        ("Auth", {"fields": auth}),
    )

admin.site.register(CustomUser, CustomUserAdmin)