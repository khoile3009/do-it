from django.db import models
from django.core import exceptions, validators
from django.contrib.auth import models as auth_models
from django.utils import timezone

from common import models as common_models

from datetime import date


class UserManager(auth_models.BaseUserManager):

    def create_user(self, email, password, phone_number, first_name, last_name):
        if not email:
            raise ValueError("User must have an email address")
        if not password:
            raise ValueError("User must have an password")
        if not phone_number:
            raise ValueError("User must have an phone number")

        normalized_email = self.normalize_email(email)
        user = self.model(email=normalized_email,
                          username=normalized_email,
                          phone_number=phone_number,
                          first_name=first_name,
                          last_name=last_name)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, phone_number):
        user = self.create_user(email, password, phone_number)
        user.is_superuser = True
        user.is_staff = True
        user.save()

        return user


class User(auth_models.AbstractUser):
    SKILL_DEFAULT = "no_skill"
    SKILL_CHOICES = (
        (SKILL_DEFAULT, "No Skill"),
    )

    email = models.CharField(max_length=255, unique=True)
    phone_number = models.CharField(
        max_length=20,
        validators=[validators.RegexValidator(
            regex="^[0-9]*$", message="Phone number can only contain numbers")],
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

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['phone_number']
