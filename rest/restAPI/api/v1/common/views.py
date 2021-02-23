from rest_framework import generics, permissions

from . import serializers
from common import models


class TagBase():
    serializer_class = serializers.Tag
    # permission_classes = [permissions.IsAuthenticated]


class TagCreate(TagBase, generics.CreateAPIView):
    pass


class TagRetrieve(TagBase, generics.RetrieveAPIView):
    queryset = models.Tag.objects.all()


class TagByName(TagBase, generics.RetrieveAPIView):
    queryset = models.Tag.objects.all()
    lookup_field = "name"
