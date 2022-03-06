from django.urls import path
from . import views
from django.conf.urls import include, url
 # from .views import AWSUploadView

urlpatterns=[

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

