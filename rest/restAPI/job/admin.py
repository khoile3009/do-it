from django.contrib import admin

from . import models

for model in [
    models.Job,
    models.PayRange,
    models.Application,
    models.Request,
    models.Message,
    models.Rating,
    models.ReportTicket,
    models.Block,
]:
    admin.site.register(model)
