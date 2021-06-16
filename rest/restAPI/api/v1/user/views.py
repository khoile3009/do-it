from .serializers import UserSerializer, RegisterSerializer, LoginSerializer, UserUpdateSerializer
from knox.models import AuthToken
from rest_framework.response import Response
from rest_framework import generics, permissions

from api.v1 import pagination
from user import models
from . import serializers


# Register API
class Register(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        _, token = AuthToken.objects.create(user)
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": token
        })


# Login API
class Login(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        _, token = AuthToken.objects.create(user)
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": token
        })


# Get User API
class UserRetrieve(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


class UserList(generics.ListAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer
    pagination_class = pagination.UserListPagination
    queryset = models.User.objects.all()


class UserUpdate(generics.UpdateAPIView):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = UserUpdateSerializer
    queryset = models.User.objects.all()

    def get_serializer(self, instance, **kwargs):
        kwargs["partial"] = True
        return super().get_serializer(instance, **kwargs)

    def get_object(self):
        return self.request.user


class UserSkillCreate(generics.CreateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = serializers.UserSkillSerializer


class UserSkillUpdate(generics.UpdateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = serializers.UserSkillSerializer

    def get_serializer(self, instance, **kwargs):
        kwargs["partial"] = True

        return super().get_serializer(instance, **kwargs)


class UserSkillList(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = serializers.UserSkillSerializer
    queryset = models.UserSkill.objects.all()
    
    def get_queryset(self):
        queryset = super().get_queryset()
        user = self.request.user
        return queryset.filter(user=user)

