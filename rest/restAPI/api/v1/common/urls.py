from django.urls import path, include

from . import views

urlpatterns = [
    path("tag/create", views.TagCreate.as_view(), name="tag_create"),
    path("tag", views.TagList.as_view(), name="tag_list"),
]