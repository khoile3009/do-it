from django.urls import path, include


urlpatterns = [
    path("v1/", include("api.v1.common.urls")),
    path("v1/", include("api.v1.job.urls")),
    path("v1/", include("api.v1.user.urls")),
]