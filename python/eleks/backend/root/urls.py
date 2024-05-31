from django.contrib import admin
from django.urls import path

import dataSwipe.views


urlpatterns = [
    path("admin/", admin.site.urls),
    path("", dataSwipe.views.index),
]
