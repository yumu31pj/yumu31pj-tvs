from django.db import models
from django.contrib import admin

class News(models.Model):
    news_id = models.AutoField(primary_key=True)
    news_title = models.CharField(max_length=250)
    news_body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'News'
        verbose_name_plural = 'News'

    def __str__(self):
        return self.news_title