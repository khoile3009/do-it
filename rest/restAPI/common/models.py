from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(
        max_length=255,
        unique=True,
        default="N/A",
    )
    parent = models.ForeignKey(
        "Category",
        on_delete=models.CASCADE,
        # related_name="parent",
        null=True
    )

    def __str__(self):
        return self.name
