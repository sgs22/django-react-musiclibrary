from django.db import models


class Song(models.Model):
    title = models.CharField(max_length=200)
    artist = models.CharField(max_length=200)
    genre = models.CharField(max_length=200, blank=True, null=True)
    length = models.IntegerField(blank=True, null=True)
    year = models.DateField(blank=True, null=True)
    active = models.BooleanField(default=True)
    album = models.ForeignKey('Album', on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class Album(models.Model):
    album_title = models.CharField(max_length=200)
    album_artist = models.CharField(max_length=200)
    album_cover = models.ImageField()

    def __str__(self):
        return self.album_title


class Playlist(models.Model):
    playlist_title = models.CharField(max_length=120)
    songs = models.ManyToManyField(Song, through='PlaylistTrack')


class PlaylistTrack(models.Model):
    playlist = models.ForeignKey(Playlist, on_delete=models.CASCADE)
    song = models.ForeignKey(Song, on_delete=models.CASCADE)
    order = models.IntegerField()

    class Meta:
        ordering = ['order']
