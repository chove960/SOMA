from django.urls import path
from .views import CourseListCreateView,StudentListCreateView,ModuleListCreateView,EnrollmentListCreateView,SemesterResultListCreateView

urlpatterns = [
    path('course/', CourseListCreateView.as_view(), name='course'),
    path('student/', StudentListCreateView.as_view(), name='student_list'),
    path('module/', ModuleListCreateView.as_view(), name='module'),
    path('enrollment/', EnrollmentListCreateView.as_view(), name='enrollment'),
    path('semester-result/', SemesterResultListCreateView.as_view(), name='semester-result'),
]