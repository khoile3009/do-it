from rest_framework import serializers
from user import models
from django.contrib.auth import authenticate
from api.v1.common.serializers import CategorySerializer

from ..common import serializers as common_serializers
from common import models as common_models
from user import models


class UserBase(serializers.ModelSerializer):

    class Meta:
        model = models.User
        fields = [
            "pk",
            "username",
        ]


class UserSkillSerializer(serializers.ModelSerializer):
    user = UserBase(read_only=True)
    skill = common_serializers.CategorySerializer(read_only=True)
    skill_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = models.UserSkill
        fields = [
            "pk",
            "user",
            "skill",
            "skill_id",
            "total_rating",
            "number_rating",
        ]
        extra_kwargs = {
            "total_rating": {"read_only": True},
            "number_rating": {"read_only": True},
        }

    def create(self, validated_data):
        request = self.context.get('request', None)
        user = request.user
        skills = common_models.Category.objects.filter(id=validated_data["skill_id"])
        skill = skills.first()
        if models.UserSkill.objects.filter(user=user, skill=skill).exists():
            raise serializers.ValidationError({
                "user": "This user-skill relation already exists",
                "skill": "This user-skill relation already exists",
            })
        validated_data["skill"] = skill
        validated_data["user"] = user

        return super().create(validated_data)


# User Serializer
class UserSerializer(serializers.ModelSerializer):
    full_name = serializers.SerializerMethodField(method_name='get_full_name')
    skills = CategorySerializer(many=True, read_only=True)
    sex = serializers.SerializerMethodField(method_name='get_sex_display')

    class Meta:
        model = models.User
        fields = [
            'id',
            'username',
            'email',
            'full_name',
            'sex',
            'phone_number',
            'address',
            'birthday',
            'headline',
            'description',
            'total_rating',
            'number_rating',
            'skills',
        ]

    # TODO: Get average cost
    def get_full_name(self, instance):
        return instance.get_full_name()

    def get_sex_display(self, instance):
        return instance.get_sex_display()
# Register Serializer


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = [
            'id',
            'email',
            'password',
            'first_name',
            'last_name',
            'phone_number',
        ]
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = models.User.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            phone_number=validated_data['phone_number']
        )

        return user


# Login Serializer
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")


class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = [
            'address',
            'birthday',
            'headline',
            'description',
            'first_name',
            'last_name'
        ]
