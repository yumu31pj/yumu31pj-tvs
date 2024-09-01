from rest_framework import viewsets, filters
from .models import CustomUser
from .serializers import CustomUserSerializer

class CustomUserViewSet(viewsets.ModelViewSet):
  queryset = CustomUser.objects.all()
  serializer_class = CustomUserSerializer
  filter_backends = (filters.SearchFilter,)
  search_fields = ('id','email', 'username')