from django.urls import path, include

from . import views

urlpatterns = [
    path("job/", views.JobList.as_view(), name="job_create"),
    path("job/create", views.JobCreate.as_view(), name="job_create"),
    path("job/<int:pk>", views.JobDetail.as_view(), name="job_detail"),
    path("job/<int:pk>/update", views.JobUpdate.as_view(), name="job_update"),
]