from django.db import models

# Create your models here.
class Employee(models.Model):
    name = models.CharField(max_length=100)
    age = models.PositiveIntegerField()
    dob = models.DateField()
    gender = models.CharField(max_length=10)
    designation = models.CharField(max_length=100)