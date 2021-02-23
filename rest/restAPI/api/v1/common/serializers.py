from rest_framework import serializers

from common import models


class Tag(serializers.ModelSerializer):

    class Meta:
        model = models.Tag
        fields = [
            "pk",
            "name",
        ]