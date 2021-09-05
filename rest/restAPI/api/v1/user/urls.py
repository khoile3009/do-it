from django.urls import path, include
from knox import views as knox_views

from . import views

urlpatterns = [
    # Knox stuffs
    path("", include('knox.urls')),
    path("logout", knox_views.LogoutView.as_view(), name="knox_logout"),
    # Authorization
    path("auth/register", views.Register.as_view(), name="register"),
    path("auth/login", views.Login.as_view(), name="login"),
    # User API
    path("user/", views.UserList.as_view(), name="user_list"),
    path("user/retrieve", views.UserRetrieve.as_view(), name="user_retrieve"),
    path("user/update", views.UserUpdate.as_view(), name="user_update"),
    # User skill
    path("user/skill/", views.UserSkillList.as_view(), name="user_skill_list"),
    path("user/skill/create", views.UserSkillCreate.as_view(), name="user_skill_create"),
    path("user/skill/<int:pk>/update", views.UserSkillUpdate.as_view(), name="user_skill_update"),
]