from django.urls import path, include

from . import views

urlpatterns = [
    path("tag/create", views.TagCreate.as_view(), name="tag_create"),
    path("tag/id/<int:pk>", views.TagRetrieve.as_view(), name="tag_id"),
    path("tag/name/<str:name>", views.TagByName.as_view(), name="tag_name")
]