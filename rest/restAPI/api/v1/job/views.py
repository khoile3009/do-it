from rest_framework import generics, permissions

from . import serializers
from job import models


class JobBase():
    queryset = models.Job.objects.all()
    serializer_class = serializers.Job
    permission_classes = [permissions.IsAuthenticated]


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
        queryset = models.Job.objects.all()
        title_include = self.request.query_params.get("title")
        description_include = self.request.query_params.get("description")
        if title_include is not None:
            queryset = queryset.filter(title__contains=title_include)
        if description_include is not None:
            queryset = queryset.filter(description__contains=description_include)

        return queryset


class PayRangeBase():
    queryset = models.PayRange.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = serializers.PayRange


class PayRangeCreate(PayRangeBase, generics.CreateAPIView):
    pass


class PayRangeList(PayRangeBase, generics.ListAPIView):
    pass








