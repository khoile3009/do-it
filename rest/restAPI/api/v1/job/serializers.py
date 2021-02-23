from rest_framework import serializers

from job import models as job_models


class PayRangeSerializer(serializers.ModelSerializers):

    class Meta:
        model = job_models.PayRange
        fields = [
            "currency",
            "min",
            "max",
        ]


class JobSerializer(serializers.ModelSerializers):

    class Meta:
        model = job_models.Job
        fields = [
            "pk",
            "title",
            "description",
            "is_finished"
        ]