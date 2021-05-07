from rest_framework import generics, permissions

from . import serializers
from common import models


class CategoryBase():
    serializer_class = serializers.CategorySerializer
    queryset = models.Category.objects.all()
    permission_classes = [permissions.IsAuthenticated]


class CategoryCreate(CategoryBase, generics.CreateAPIView):
    pass


class CategoryList(CategoryBase, generics.ListAPIView):

    def get_queryset(self):
        queryset = models.Category.objects.all()
        name = self.request.query_params.get("name")
        id = self.request.query_params.get("id")
        if name is not None:
            queryset = queryset.filter(name__contains=name)
        if id is not None:
            queryset = queryset.filter(id=id)
        return queryset
