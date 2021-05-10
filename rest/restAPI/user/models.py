from django.db import models
from django.core import exceptions, validators
from django.contrib.auth import models as auth_models
from django.utils import timezone

from common import models as common_models

from datetime import date

from .manager import UserManager


class User(auth_models.AbstractUser):
    SKILL_DEFAULT = "no_skill"
    SKILL_CHOICES = (
        (SKILL_DEFAULT, "No Skill"), 
    )

    phone_number = models.CharField(
        max_length=20,
        validators=[validators.RegexValidator(regex="^[0-9]*$", message="Phone number can only contain numbers")],
        unique=True,
        blank=True,
    )
    address = models.TextField(blank=True)
    birthday = models.DateField(default=date.today)
    # Basically hard-coded tags
    skill = models.CharField(
        max_length=255,
        choices=SKILL_CHOICES,
        default=SKILL_DEFAULT,
    )
    rating = models.DecimalField(
        max_digits=2, 
        decimal_places=1, 
        blank=True, 
        default=0,
        validators=[
            validators.MaxValueValidator(5),
            validators.MinValueValidator(0),
        ],
    )

    is_provider = models.BooleanField(default=False)    

    objects = UserManager()