from django.urls import path
from Recipes.views import Ingredientview
from django.conf.urls import include, url
# from .views import AWSUploadView


urlpatterns = [
   #path('', views.page, name='Mainpage'),
   path('get_recipes',Ingredientview.as_view()),
   # path('',views.upload_city,name="index"),

  ]