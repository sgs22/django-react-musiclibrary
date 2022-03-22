from django.contrib import admin
from .models import Song

class SongAdmin(admin.ModelAdmin):
    list_display = ('title', 'artist', 'genre', 'length', 'year')

admin.site.register(Song, SongAdmin)

