# Generated by Django 5.0.1 on 2024-02-06 21:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('soma_app', '0004_alter_student_course'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='student',
            name='course',
        ),
    ]
