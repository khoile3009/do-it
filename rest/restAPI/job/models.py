from django.db import models
from django.utils import timezone

from user import models as user_models
from common import models as common_models


OPTION_GOOD = "good"
OPTION_BAD = "bad"
OPTION_CHOICES = (
    (OPTION_GOOD, "Good"),
    (OPTION_BAD, "Bad"),
)


class PayRange(models.Model):
    CURRENCY_VND = "VND"
    CURRENCY_USD = "USD"
    CURRENCY_CHOICES = (
        (CURRENCY_VND, "Việt Nam Đồng"),
        (CURRENCY_USD, "Đô La Mỹ")
    )

    currency = models.CharField(
        max_length=common_models.MAX_LENGTH_CHAR_FIELD,
        choices=CURRENCY_CHOICES, 
        default=CURRENCY_VND,
    )
    min = models.DecimalField(max_digits=10, decimal_places=2)
    max = models.DecimalField(max_digits=10, decimal_places=2)


class Job(models.Model):
    customer = models.ForeignKey(
        user_models.User, 
        on_delete=models.CASCADE,
    )
    title = models.CharField(max_length=common_models.MAX_LENGTH_CHAR_FIELD)
    description = models.TextField(blank=True)
    # PayRange to be handled by 3rd party API 
    # pay_range = models.ForeignKey(
    #     PayRange,
    #     on_delete=models.CASCADE,
    # )
    is_finished = models.BooleanField(default=False)
    is_cancelled = models.BooleanField(default=False)

    def __str__(self):
        return self.title


class Application(models.Model):
    job = models.ForeignKey(Job, on_delete=models.CASCADE)
    provider = models.ForeignKey(user_models.User, on_delete=models.CASCADE)
    time = models.DateTimeField(default=timezone.now)


class Request(models.Model):
    job = models.ForeignKey(Job, on_delete=models.CASCADE)
    provider = models.ForeignKey(user_models.User, on_delete=models.CASCADE)
    time = models.DateTimeField(default=timezone.now)


class Message(models.Model):
    application = models.ForeignKey(Application, on_delete=models.CASCADE)
    # What is user field for?
    # user = models.ManyToManyField(user_models.User)
    sender = models.ForeignKey(
        user_models.User, 
        on_delete=models.CASCADE, 
        related_name="sent_messages"
    )
    receiver = models.ForeignKey(
        user_models.User, 
        on_delete=models.CASCADE, 
        related_name="received_messages"
    )
    time = models.DateTimeField(default=timezone.now)


class Rating(models.Model):
    job = models.ForeignKey(Job, on_delete=models.CASCADE)
    star = models.IntegerField(default=0)
    # Đánh giá chung?
    option = models.CharField(
        max_length=common_models.MAX_LENGTH_CHAR_FIELD,
        choices=OPTION_CHOICES,
        default=OPTION_GOOD,
    )
    message = models.TextField(blank=True)


# should move to user models instead
class ReportTicket(models.Model):
    # TODO: discuss how to handle on_delete
    sender = models.ForeignKey(
        user_models.User, 
        on_delete=models.CASCADE, 
        related_name="sent_tickets"
    )
    receiver = models.ForeignKey(
        user_models.User, 
        on_delete=models.CASCADE, 
        related_name="received_tickets"
    )
    option = models.CharField(
        max_length=common_models.MAX_LENGTH_CHAR_FIELD,
        choices=OPTION_CHOICES,
        default=OPTION_GOOD,
    )
    message = models.TextField(blank=True)


# Should move to user models instead
class Block(models.Model):
    blocker = models.ForeignKey(
        user_models.User, 
        on_delete=models.CASCADE, 
        related_name="blocks_made"
    )
    blocked = models.ForeignKey(
        user_models.User,
        on_delete=models.CASCADE,
        related_name="blocks_gotten"
    )


# TODO:
# class Money(models.Model):
#     pass