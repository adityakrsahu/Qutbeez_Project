# Generated by Django 5.0.6 on 2024-07-05 09:36

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('qutbeez', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='size',
            field=models.CharField(choices=[('extra-extra-small', 'extra-extra-small'), ('extra-small', 'extra-small'), ('small', 'small'), ('medium', 'medium'), ('large', 'large'), ('extra-large', 'extra-large'), ('extra-extra-large', 'extra-extra-large')], default=1, max_length=20),
            preserve_default=False,
        ),
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField(default=1)),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='qutbeez.customer')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='qutbeez.product')),
            ],
        ),
    ]
