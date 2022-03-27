import datetime
from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Day(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = datetime.date.today()  
    trash = models.FloatField(max_length=1000000)
    water = models.FloatField(max_length=1000000)
    co2 = models.FloatField(max_length=1000000)
    energy = models.FloatField(max_length=1000000)