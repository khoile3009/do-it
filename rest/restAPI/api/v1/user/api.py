from rest_framework import generics, permissions
from common.models import Category
from user.models import UserSkill
from django.http import HttpResponse, JsonResponse


class UserSkillAPI(generics.GenericAPIView):

    permission_class = [
        permissions.IsAuthenticated
    ]

    def post(self, *args, **kwargs):
        user = self.request.user
        if not self.request.POST.get('skill_id'):
            return JsonResponse({'status': 'No skill_id provided'}, status=422)
        try:
            # TODO: Recursively add subskils
            skill = Category.objects.get(id=self.request.POST['skill_id'])
        except Category.DoesNotExist:
            return JsonResponse({'status': 'No skill with that id found '}, status=404)

        user_skill = UserSkill.objects.get_or_create(user=user, skill=skill)
        return JsonResponse({'status': 'ok'}, safe=True)
