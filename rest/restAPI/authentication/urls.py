from django.urls import path

from . import views

urlpatterns = [
    path('api/v1/public', views.public),
    path('api/v1/private', views.private),
    path('api/v1/private-scoped', views.private_scoped),
]
