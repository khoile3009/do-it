from django.contrib import admin

from . import models

for model in [
    models.Job,
    models.PayRange,
]:
    admin.site.register(model)
