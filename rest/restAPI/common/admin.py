from django.contrib import admin

from . import models

for model in [
    models.Tag,
]:
    admin.site.register(model)
