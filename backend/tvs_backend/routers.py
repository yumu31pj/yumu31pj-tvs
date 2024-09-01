from rest_framework import routers
from tvs_backend.apps.news.viewsets import NewsViewSet
from tvs_backend.apps.users.viewsets import CustomUserViewSet

router = routers.DefaultRouter()
router.register(r'news', NewsViewSet) 
router.register(r'users', CustomUserViewSet)