from django.db import models

class Accounts(models.Model):
    id = models.AutoField(primary_key=True)
    full_name = models.CharField(max_length=50)
    password = models.CharField(max_length=255)
    email = models.CharField(max_length=50)
