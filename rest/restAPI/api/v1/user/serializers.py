from rest_framework import serializers
from user.models import User, UserSkill
from django.contrib.auth import authenticate
from api.v1.common.serializers import CategorySerializer


class UserSkillSerializer(serializers.RelatedField):
    def to_representation(self, value):
        return {"pk": value.pk, "user": value.user, "skill": value.skill, 'total_rating': value.total_rating, 'number_rating': value.number_rating}


# User Serializer
class UserSerializer(serializers.ModelSerializer):
    full_name = serializers.SerializerMethodField(method_name='get_full_name')
    skills = CategorySerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'email',
            'full_name',
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


# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'email',
            'password',
            'first_name',
            'last_name',
            'phone_number',
        ]
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            phone_number=validated_data['phone_number'])

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
        model = User
        fields = [
            'address',
            'birthday',
            'headline',
            'description',
            'first_name',
            'last_name'
        ]
