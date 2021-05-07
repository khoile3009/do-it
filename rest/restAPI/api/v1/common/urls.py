from django.urls import path, include

from . import views

urlpatterns = [
    path("category/create", views.CategoryCreate.as_view(), name="category_create"),
    path("category", views.CategoryList.as_view(), name="category_list"),
]