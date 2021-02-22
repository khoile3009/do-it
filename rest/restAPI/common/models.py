from django.db import models

# Create your models here.

class Tag(models.Model):
    name = models.CharField(
        max_length=255,
        unique=True,
        default="N/A",
    )

    def __str__(self):
        return self.name
