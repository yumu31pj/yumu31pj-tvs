from rest_framework import viewsets, filters
from .models import News
from .serializers import NewsSerializer

class NewsViewSet(viewsets.ModelViewSet):
  queryset = News.objects.all()
  serializer_class = NewsSerializer
  filter_backends = (filters.SearchFilter,)
  search_fields = ('news_id', 'news_title', 'news_body', 'created_at', 'updated_at')