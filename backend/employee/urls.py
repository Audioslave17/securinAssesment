from django.urls import path
from .views import list_employee, add_employee, edit_employee, delete_employee

urlpatterns = [
    path('list/', list_employee, name='list_employee'),
    path('add/', add_employee, name='add_employee'),
    path('edit/<int:pk>/', edit_employee, name='edit_employee'),
    path('delete/<int:pk>/', delete_employee, name='delete_employee'),
]
