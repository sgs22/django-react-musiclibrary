from django.db import models

class Song(models.Model):
    title = models.CharField(max_length=200)
    artist = models.CharField(max_length=200)
    genre = models.CharField(max_length=200)
    length = models.IntegerField()
    year = models.DateField()
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.title

