from django.shortcuts import render
from django.http import HttpResponse
import os
from django.conf import settings
from django.views.generic import TemplateView 
from django.core.files.storage import FileSystemStorage
import requests
import json
from .models import UploadFile
from django.contrib import messages

@csrf_exempt
def foodApi(request, id=0) 
    if request.method=='GET':
        foods = Foods.objects.all()
        food_serializer = FoodSerializer(foods, many = True)
        return  JsonResponse(food_serializer.data, safe=False)
    elif request.method=='POST':
        food_data=JSONParser().parse(request)
        food_serializer = FoodSerializer(data=food_data)
        if food_serializer.is_valid():
            food_serializer.save()
            return JsonReponse("Added successfully", safe=False)
        return JsonReponse("Failed to add", safe=False)

    elif request.method=='PUT':
        food_serialize = JSONParser().parse(request)
        food = Foods.objects.get(FoodID=food_data['FoodID'])
        food_serializer=FoodSerializer(food, data=food_data)
        if food_serializer.is_valid():
            food_serializer.save()
            return JsonResponse("Updated Sucessfully", safe=False)
        return JsonReponse("Failed to update", safe=False)

elif request.method=='DELETE'
food=Foods.objects.get(FoodID=id)
food.delete()
return JsonResponse("Deleted successfully", safe=False)

@csrf_exempt
def recipeAPI(request, id=0) 
    if request.method=='GET':
        recipes = Recipes.objects.all()
        recipe_serializer = RecipeSerializer(recipes, many = True)
        return  JsonResponse(recipe_serializer.data, safe=False)
    elif request.method=='POST':
        recipe_data=JSONParser().parse(request)
        recipe_serializer = RecipeSerializer(data=recipe_data)
        if recipe_serializer.is_valid():
            recipe_serializer.save()
            return JsonReponse("Added successfully", safe=False)
        return JsonReponse("Failed to add", safe=False)

    elif request.method=='PUT':
        recipe_serialize = JSONParser().parse(request)
        recipes = Recipes.objects.get(FoodID=recipes_data['FoodID'])
        recipe_serializer=RecipeSerializer(food, data=recipes_data)
        if recipe_serializer.is_valid():
            recipe_serializer.save()
            return JsonResponse("Updated Sucessfully", safe=False)
        return JsonReponse("Failed to update", safe=False)

elif request.method=='DELETE'
recipe=Recipes.objects.get(FoodID=id)
recipe.delete()
return JsonResponse("Deleted successfully", safe=False)


@csrf_exempt
def SaveFile(request):
    file=request.FILES['myFile']
    file_name =  default_storage.save(file.name, file)

    return JsonReponse(file_name, safe=False)
