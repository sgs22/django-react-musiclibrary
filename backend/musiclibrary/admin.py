from django.contrib import admin
from .models import Track, Album, Playlist, PlaylistTrack

class SongAdmin(admin.ModelAdmin):
    list_display = ('title', 'artist', 'genre', 'length', 'year')

class AlbumAdmin(admin.ModelAdmin):
    list_display = ('album_title', 'album_artist', 'album_cover')

class PlaylistAdmin(admin.ModelAdmin):
    pass

class PlaylistTrackAdmin(admin.ModelAdmin):
    pass

admin.site.register(Track, SongAdmin)
admin.site.register(Album, AlbumAdmin)
admin.site.register(Playlist, PlaylistAdmin)
admin.site.register(PlaylistTrack, PlaylistTrackAdmin)


