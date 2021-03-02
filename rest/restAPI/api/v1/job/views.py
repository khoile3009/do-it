from rest_framework import generics, permissions

from . import serializers
from job import models as job_models


class JobBase():
    query_set = job_models.Job.objects.all()
    serializer_class = serializers.Job
    # permission_classes = [permissions.IsAuthenticated]


class JobCreate(JobBase, generics.CreateAPIView):
    pass


class JobUpdate(JobBase, generics.UpdateAPIView):

    def get_serializer(self, instance, **kwargs):
        kwargs["partial"] = True
        return super().get_serializer(instance, **kwargs)


class JobDetail(JobBase, generics.RetrieveAPIView):
    pass


class JobList(JobBase, generics.ListAPIView):
    
    def get_queryset(self):
        queryset = job_models.Job.objects.all()
        title_include = self.request.query_params.get("title")
        description_include = self.request.query_params.get("description")
        if title_include is not None:
            queryset = queryset.filter(title__contains=title_include)
        if description_include is not None:
            queryset = queryset.filter(description__contains=description_include)

        return queryset







