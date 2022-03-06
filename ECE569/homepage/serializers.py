from rest_framework import serializers
from EmployeeApp.models import Foods, Recipes

class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Foods
        fields = ('FoodID',
                  'FoodName',
                  'FoodType',
                  'FoodDate')

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipes
        fields = ('RecipeID',
                  'RecipeName',
                  'RecipeType')


    RecipeID = models.AutoField(primary_key = True)
    RecipeName = models.CharField(max_length = 200)
    RecipeType = models.CharField(max_length = 200)
    
