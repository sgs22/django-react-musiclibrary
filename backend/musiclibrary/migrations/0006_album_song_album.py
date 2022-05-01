# Generated by Django 4.0.3 on 2022-04-25 18:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('musiclibrary', '0005_alter_song_genre_alter_song_year'),
    ]

    operations = [
        migrations.CreateModel(
            name='Album',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('album_title', models.CharField(max_length=200)),
                ('album_artist', models.CharField(max_length=200)),
                ('album_cover', models.ImageField(upload_to='')),
            ],
        ),
        migrations.AddField(
            model_name='song',
            name='album',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='musiclibrary.album'),
        ),
    ]