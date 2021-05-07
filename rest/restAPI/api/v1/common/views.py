from rest_framework import generics, permissions

from . import serializers
from common import models


class TagBase():
    serializer_class = serializers.TagSerializer
    queryset = models.Tag.objects.all()
    permission_classes = [permissions.IsAuthenticated]


class TagCreate(TagBase, generics.CreateAPIView):
    pass


class TagList(TagBase, generics.ListAPIView):

    def get_queryset(self):
        queryset = models.Tag.objects.all()
        name = self.request.query_params.get("name")
        id = self.request.query_params.get("id")
        if name is not None:
            queryset = queryset.filter(name__contains=name)
        if id is not None:
            queryset = queryset.filter(id=id)
        return queryset
