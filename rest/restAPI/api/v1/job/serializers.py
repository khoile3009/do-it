from rest_framework import serializers

from job import models as job_models


class PayRange(serializers.ModelSerializer):

    class Meta:
        model = job_models.PayRange
        fields = [
            "currency",
            "min",
            "max",
        ]


class Job(serializers.ModelSerializer):
    pay_range = PayRange()
    rating = serializers.SerializerMethodField(many=True)

    class Meta:
        model = job_models.Job
        fields = [
            "pk",
            "title",
            "description",
            "pay_range",
            "is_finished",
            "rating",
        ]

    


class Application(serializers.ModelSerializer):

    class Meta:
        model = job_models.Application
        fields = [
            "pk",
            "job",
            "provider",
            "time"
        ]


class Request(serializers.ModelSerializer):

    class Meta:
        model = job_models.Request
        fields = [
            "pk",
            "job",
            "provider",
            "time"
        ]


class Rating(serializers.ModelSerializer):

    class Meta:
        model = job_models.Rating
        fields = [
            "pk",
            "job",
            "star",
            "option",
            "message",
        ]

# should move to user API instead
class ReportTicket(serializers.ModelSerializer):

    class Meta:
        model = job_models.ReportTicket
        fields = [
            "pk",
            # have to serializer user somehow
            "sender",
            "receiver",
            "option",
            "message",
        ]