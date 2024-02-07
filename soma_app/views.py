from django.shortcuts import render
from requests import request
from rest_framework import generics,status
from rest_framework.response import Response
from .models import Student, Course, Module, Enrollment, SemesterResult
from .serializers import (
    StudentSerializer, CourseSerializer, ModuleSerializer,
    EnrollmentSerializer, SemesterResultSerializer
)

from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.shortcuts import render

from reportlab.lib.pagesizes import letter
from reportlab.pdfgen.canvas import Canvas
from django.http import HttpResponse


class StudentListCreateView(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
   


class CourseListCreateView(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
   

class ModuleListCreateView(generics.ListCreateAPIView):
    queryset = Module.objects.all()
    serializer_class = ModuleSerializer
   

class EnrollmentListCreateView(generics.ListCreateAPIView):
    queryset = Enrollment.objects.all()
    serializer_class = EnrollmentSerializer
    
class SemesterResultListCreateView(generics.ListCreateAPIView):
    queryset = SemesterResult.objects.all()
    serializer_class = SemesterResultSerializer
    





    
