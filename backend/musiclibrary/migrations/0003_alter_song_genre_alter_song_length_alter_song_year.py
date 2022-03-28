# Generated by Django 4.0.3 on 2022-03-28 21:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('musiclibrary', '0002_song_active'),
    ]

    operations = [
        migrations.AlterField(
            model_name='song',
            name='genre',
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.AlterField(
            model_name='song',
            name='length',
            field=models.IntegerField(blank=True),
        ),
        migrations.AlterField(
            model_name='song',
            name='year',
            field=models.DateField(blank=True),
        ),
    ]
