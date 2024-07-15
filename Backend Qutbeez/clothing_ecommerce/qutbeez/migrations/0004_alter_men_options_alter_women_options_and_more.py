# Generated by Django 5.0.6 on 2024-07-13 08:16

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('qutbeez', '0003_men_women'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='men',
            options={'verbose_name_plural': 'Men'},
        ),
        migrations.AlterModelOptions(
            name='women',
            options={'verbose_name_plural': 'Women'},
        ),
        migrations.AddField(
            model_name='product',
            name='men_category',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='qutbeez.men'),
        ),
        migrations.AddField(
            model_name='product',
            name='women_category',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='qutbeez.women'),
        ),
    ]
