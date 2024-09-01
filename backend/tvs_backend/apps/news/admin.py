from django.contrib import admin
from .models import News

@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('news_id', 'news_title', 'news_body', 'created_at', 'updated_at')
