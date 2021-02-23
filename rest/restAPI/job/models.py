from django.db import models
from django.utils import timezone

from user import models as user_models



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
        max_length=140,
        choices=CURRENCY_CHOICES, 
        default=CURRENCY_VND,
    )
    min = models.DecimalField(max_digits=10, decimal_places=2)
    max = models.DecimalField(max_digits=10, decimal_places=2)


class Job(models.Model):
    customer = models.ForeignKey(
        user_models.Customer, 
        on_delete=models.CASCADE,
    )
    title = models.CharField(max_length=255, blank=True)
    description = models.TextField()
    pay_range = models.ForeignKey(
        PayRange,
        on_delete=models.CASCADE,
    )
    is_finished = models.BooleanField(default=False)


class Application(models.Model):
    job = models.ForeignKey(Job, on_delete=models.CASCADE)
    provider = models.ForeignKey(user_models.Provider, on_delete=models.CASCADE)
    time = models.DateTimeField(default=timezone.now)


class Request(models.Model):
    job = models.ForeignKey(Job, on_delete=models.CASCADE)
    provider = models.ForeignKey(user_models.Provider, on_delete=models.CASCADE)
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
        max_length=100,
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
        max_length=100,
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