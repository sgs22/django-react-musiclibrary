from django.shortcuts import render
from rest_framework import viewsets
from .serializers import SongSerializer, AlbumSerializer
from .models import Song, Album

class SongView(viewsets.ModelViewSet):
    serializer_class = SongSerializer
    queryset = Song.objects.all()

class AlbumView(viewsets.ModelViewSet):
    serializer_class = AlbumSerializer
    queryset = Album.objects.all()