from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from . import models

# Register your models here.
for model in [
    models.User,
]:
    admin.site.register(model)
