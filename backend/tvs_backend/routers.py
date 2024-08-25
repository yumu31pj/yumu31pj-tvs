from rest_framework import routers
from tvs_backend.apps.news.viewsets import NewsViewSet

router = routers.DefaultRouter()
router.register('news', NewsViewSet) 