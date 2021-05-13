from rest_framework import generics, permissions
from common.models import Category
from user.models import UserSkill
from django.http import HttpResponse, JsonResponse
import json


class UserSkillAPI(generics.GenericAPIView):

    permission_class = [
        permissions.IsAuthenticated
    ]

    def post(self, *args, **kwargs):
        user = self.request.user
        data = json.loads(self.request.body)
        if not data.get('skill_id'):
            return JsonResponse({'status': 'No skill_id provided'}, status=422)
        try:
            # TODO: Recursively add subskils
            skill = Category.objects.get(id=data['skill_id'])
        except Category.DoesNotExist:
            return JsonResponse({'status': 'No skill with that id found '}, status=404)

        user_skill = UserSkill.objects.get_or_create(user=user, skill=skill)
        return JsonResponse({'status': 'ok'}, safe=True)

    def delete(self, *args, **kwargs):
        user = self.request.user
        data = json.loads(self.request.body)
        if not data.get('skill_id'):
            return JsonResponse({'status': 'No skill_id provided'}, status=422)
        try:
            # TODO: Recursively add subskils
            skill = Category.objects.get(id=data['skill_id'])
        except Category.DoesNotExist:
            return JsonResponse({'status': 'No skill with that id found '}, status=404)

        user_skill = UserSkill.objects.get(user=user, skill=skill)
        if not user_skill:
            return JsonResponse({'status': 'No skill with that id found on user'}, status=404)
        if user_skill.number_rating != 0:
            return JsonResponse({'status': 'Cannot delete skill with rating'}, status=404)
        user_skill.delete()
        return JsonResponse({'status': 'ok'}, safe=True)
