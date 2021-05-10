from django.contrib.auth.models import (
    BaseUserManager
)

class UserManager(BaseUserManager):

    def create_user(self, email, password, phone_number):
        if not email:
            raise ValueError("User must have an email address")
        if not password:
            raise ValueError("User must have an password")
        if not phone_number:
            raise ValueError("User must have an phone number")

        normalized_email = self.normalize_email(email)
        user = self.model(email=normalized_email, username=normalized_email, phone_number=phone_number)
        user.set_password(password)
        user.save()
        
        return user

    def create_superuser(self, email, password, phone_number):
        user = self.create_user(email, password, phone_number)
        user.is_superuser = True
        user.is_staff = True
        user.save()

        return user