from django.shortcuts import render

from django.contrib.auth.models import User
from rest_framework import viewsets
from .serializers import TrackSerializer, AlbumSerializer, PlaylistSerializer, UserSerializer
from .models import Track, Album, Playlist

from tinytag import TinyTag

class SongView(viewsets.ModelViewSet):
    serializer_class = TrackSerializer
    queryset = Track.objects.all()
    # tag = TinyTag.get('Fly Me To The Moon (2008 Remastered).mp3')
    # print(tag)

class AlbumView(viewsets.ModelViewSet):
    serializer_class = AlbumSerializer
    queryset = Album.objects.all()

class PlaylistView(viewsets.ModelViewSet):
    serializer_class = PlaylistSerializer
    queryset = Playlist.objects.all()

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()