from rest_framework import pagination


class UserListPagination(pagination.LimitOffsetPagination):
    default_limit = 20


class JobListPagination(pagination.LimitOffsetPagination):
    default_limit = 10