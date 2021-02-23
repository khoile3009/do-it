from rest_framework import generics, permissions

from . import serializers
from job import models as job_models


class JobCreate(generics.CreateAPIView):
    serializer_class = serializers.Job
    permission_classes = [permissions.IsAuthenticated]


class JobUpdate(generics.UpdateAPIView):
    serializer_class = serializers.Job
    permission_classes = [permissions.IsAuthenticated]

    def get_serializer(self, instance, **kwargs):
        kwargs["partial"] = True
        return super().get_serializer(instance, **kwargs)


class JobDetail(generics.RetrieveAPIView):
    query_set = job_models.Job.objects.all()
    serializer_class = serializers.Job
    permission_classes = [permissions.IsAuthenticated]


class JobList(generics.ListAPIView):
    query_set = job_models.Job.objects.all()
    serializer_class = serializers.Job
    permission_classes = [permissions.IsAuthenticated]


class





