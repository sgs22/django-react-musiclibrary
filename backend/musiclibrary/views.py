from django.shortcuts import render

from django.contrib.auth.models import User
from rest_framework import viewsets
from .serializers import SongSerializer, AlbumSerializer, PlaylistSerializer, UserSerializer
from .models import Song, Album, Playlist

class SongView(viewsets.ModelViewSet):
    serializer_class = SongSerializer
    queryset = Song.objects.all()

class AlbumView(viewsets.ModelViewSet):
    serializer_class = AlbumSerializer
    queryset = Album.objects.all()

class PlaylistView(viewsets.ModelViewSet):
    serializer_class = PlaylistSerializer
    queryset = Playlist.objects.all()

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()