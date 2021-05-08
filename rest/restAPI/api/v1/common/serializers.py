from rest_framework import serializers

from common import models


class CategorySerializer(serializers.ModelSerializer):
    parent = serializers.PrimaryKeyRelatedField(read_only=True)
    class Meta:
        model = models.Category
        fields = [
            "pk",
            "name",
            "parent"
        ]