from http.client import HTTPResponse
from django.shortcuts import render
import requests
import json
from django.contrib import messages
from rest_framework.views import APIView
from django.http import HttpResponse
from rest_framework.renderers import TemplateHTMLRenderer

# Create your views here.
class Ingredientview(APIView):
    # renderer_classes = [TemplateHTMLRenderer]
    # template_name = 'upload.html'
    
    def post(self, request):
        print('working')
        ing = request.data['ingredient']
        print(ing)
        return HttpResponse(status=200)