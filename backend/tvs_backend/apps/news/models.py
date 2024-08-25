from django.db import models

class News(models.Model):
    news_id = models.AutoField(primary_key=True)
    news_title = models.CharField(max_length=250)
    news_body = models.TextField()