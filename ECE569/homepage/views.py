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

