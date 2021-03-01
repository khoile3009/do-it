from django.db import models
from django.core import exceptions
from django.contrib.auth import models as auth_models
from django.utils import timezone


class UserProfile(models.Model):
    phone_number = models.CharField(
        max_length=20,
        unique=True,
        default=None
    )
    address = models.TextField(blank=True)
    birthday = models.DateField(default=timezone.now)
    rating = models.DecimalField(max_digits=2, decimal_places=1, blank=True, default=0)


class User(auth_models.AbstractUser):
    profile = models.OneToOneField(
        UserProfile,
        on_delete=models.CASCADE, 
        null=True,
    )


class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    pass


class Provider(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    SKILL_DEFAULT = "no_skill"
    SKILL_CHOICES = (
        (SKILL_DEFAULT, "No Skill"),
    )

    skill = models.CharField(
        max_length=255,
        choices=SKILL_CHOICES,
        default=SKILL_DEFAULT,
    )
