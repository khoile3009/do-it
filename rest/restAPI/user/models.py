from django.db import models
from django.core import exceptions
from django.contrib.auth import models as auth_models
from django.utils import timezone


class User(auth_models.AbstractUser):
    phone_number = models.CharField(
        max_length=20,
        unique=True,
    )
    address = models.TextField(blank=True)
    birthday = models.DateField(default=timezone.now)
    rating = models.DecimalField(max_digits=2, decimal_places=1, null=True)

    class Meta:
        pass


class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    pass


class Provider(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    SKILL_DEFAULT = "no_skill"
    SKILL_CHOICES = (
        (SKILL_DEFAULT, "No Skill"),
    )

    skill = models.CharField(
        max_length=255,
        choices=SKILL_CHOICES,
        default=SKILL_DEFAULT,
    )