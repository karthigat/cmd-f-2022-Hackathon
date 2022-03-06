from django.urls import path
from . import views
from django.conf.urls import include, url
 # from .views import AWSUploadView

urlpatterns=[
    url(r'^food$', views.foodApi),
    url(r'^food/([0-9]+)$', views.foodApi),

    url(r'^recipe$', views.foodApi),
    url(r'^recipe/([0-9]+)$', views.foodApi),


    url(r'^Food/SaveFile$', views.SaveFile)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

