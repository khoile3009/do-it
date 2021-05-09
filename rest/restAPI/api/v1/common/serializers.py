from rest_framework import serializers

from common import models


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Category
        fields = [
            "pk",
            "name",
            "parent"
        ]