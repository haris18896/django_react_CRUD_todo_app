# We will finally write the URL configuration using Routers:
from rest_framework import routers

from .views import TodoViewSet

router = routers.DefaultRouter()
router.register('todos', TodoViewSet, 'todos')
# router.register('<The URL prefix>', <The viewset class>, '<The URL name>')

urlpatterns = router.urls