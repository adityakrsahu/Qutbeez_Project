# Generated by Django 5.0.6 on 2024-07-13 07:38

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('qutbeez', '0002_product_size_cart'),
    ]

    operations = [
        migrations.CreateModel(
            name='Men',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('men_category', models.CharField(max_length=50)),
                ('name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='qutbeez.category')),
            ],
        ),
        migrations.CreateModel(
            name='Women',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('women_category', models.CharField(max_length=50)),
                ('name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='qutbeez.category')),
            ],
        ),
    ]