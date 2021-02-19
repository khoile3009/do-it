from rest_framework import serialzers

from common import models


class TagSerializer(serialzers.ModelSerializer):

    class Meta:
        model = models.Tag
        fields = [
            pk,
            name,
        ]