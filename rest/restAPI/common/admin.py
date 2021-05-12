from django.contrib import admin

from . import models

for model in [
    models.Category,
]:
    admin.site.register(model)
