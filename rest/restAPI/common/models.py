from django.db import models


MAX_LENGTH_CHAR_FIELD = 255


class Category(models.Model):
    name = models.CharField(
        max_length=MAX_LENGTH_CHAR_FIELD,
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
