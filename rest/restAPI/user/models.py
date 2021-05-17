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
                          username=normalized_email, phone_number=phone_number)
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

    SEX_CHOICES = (
        ("M", "Male"),
        ("F", "Female"),
    )
    sex = models.CharField(max_length=1, choices=SEX_CHOICES, default="M")

    # Basically hard-coded tags
    description = models.TextField(blank=True, default="")
    headline = models.TextField(blank=True, default="")
    current_balance = models.FloatField(default=0)

    # To calculate average pay rate
    total_pay = models.FloatField(default=0)
    number_pay = models.IntegerField(default=0)

    # To calculate rating
    total_rating = models.IntegerField(default=0)
    number_rating = models.IntegerField(default=0)

    skills = models.ManyToManyField(
        common_models.Category, related_name="user_skills", through="UserSkill")

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['phone_number']


class UserSkill(models.Model):
    user = models.ForeignKey(
        User, related_name="users", on_delete=models.CASCADE)
    skill = models.ForeignKey(
        common_models.Category, related_name="skills", on_delete=models.CASCADE
    )
    total_rating = models.IntegerField(default=0)
    number_rating = models.IntegerField(default=0)
