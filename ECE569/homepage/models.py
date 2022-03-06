from django.db import models
from django.shortcuts import render
import os
from django.conf import settings
import requests
import json
# from homepage.get_location import FindCity

class Foods(models.Model):
    FoodID = models.AutoField(primary_key = True)
    FoodName = models.CharField(max_length = 150)
    FoodType = models.CharField(max_length = 100)
    FoodDate = models.DateField()

class Recipes(models.Model):
    RecipeID = models.AutoField(primary_key = True)
    RecipeName = models.CharField(max_length = 200)
    RecipeType = models.CharField(max_length = 200)
    

