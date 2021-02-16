from django.contrib import admin

from . import models

# Register your models here.
for model in [
    models.User,
    models.Customer,
    models.Provider,
]:
    admin.site.register(model)