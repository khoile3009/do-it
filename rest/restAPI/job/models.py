from django.db import models

from user import models as user_models


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
        on_delete=models.CASCADE
    )
    is_finished = models.BooleanField(default=False)


# TODO:
# class Money(models.Model):
#     pass