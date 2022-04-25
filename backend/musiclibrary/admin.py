from django.contrib import admin
from .models import Song, Album

class SongAdmin(admin.ModelAdmin):
    list_display = ('title', 'artist', 'genre', 'length', 'year')

class AlbumAdmin(admin.ModelAdmin):
    list_display = ('album_title', 'album_artist', 'album_cover')

admin.site.register(Song, SongAdmin)
admin.site.register(Album, AlbumAdmin)

