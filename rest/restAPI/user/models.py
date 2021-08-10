from django.db import models
from django.core import exceptions, validators
from django.contrib.auth import models as auth_models
from django.utils import timezone

from common import models as common_models

from datetime import date


class UserManager(auth_models.BaseUserManager):

    def create_user(self, email, password, first_name, last_name, phone_number):
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
        first_name = ""
        last_name = ""
        user = self.create_user(email, password, first_name, last_name, phone_number)
        user.is_superuser = True
        user.is_staff = True
        user.save()

        return user


class User(auth_models.AbstractUser):
    email = models.CharField(
        max_length=common_models.MAX_LENGTH_CHAR_FIELD, 
        unique=True
    )
    phone_number = models.CharField(
        max_length=20,
        validators=[validators.RegexValidator(
            regex="^[0-9]*$", message="Phone number can only contain numbers")],
        unique=True,
        blank=True,
    )
    address = models.TextField(blank=True)
    birthday = models.DateField(default=date.today)

    SEX_MALE = "male"
    SEX_FEMALE = "female"
    SEX_OTHER = "other"
    SEX_CHOICES = (
        ("male", "Male"),
        ("female", "Female"),
        ("other", "Other")
    )
    sex = models.CharField(
        max_length=common_models.MAX_LENGTH_CHAR_FIELD, 
        choices=SEX_CHOICES, 
        default="other"
    )

    headline = models.TextField(blank=True)
    description = models.TextField(blank=True)
    current_balance = models.FloatField(default=0)

    # Payments given as a customer
    total_paid_amount = models.FloatField(default=0)
    number_of_payments_paid = models.IntegerField(default=0)

    # To calculate rating
    total_rating = models.IntegerField(default=0)
    number_of_ratings = models.IntegerField(default=0)

    skills = models.ManyToManyField(
        common_models.Category, 
        related_name="user_skills", 
        through="UserSkill",
        blank=True
    )

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['phone_number']

    def save(self, *args, **kwargs):
        return super().save(*args, **kwargs)


class UserSkill(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE)
    skill = models.ForeignKey(
        common_models.Category, on_delete=models.CASCADE
    )
    total_rating = models.IntegerField(default=0)
    number_of_ratings = models.IntegerField(default=0)

    class Meta: 
        unique_together = ("user", "skill")
