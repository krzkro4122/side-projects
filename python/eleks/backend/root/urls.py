from django.contrib import admin
from django.urls import path, include

import dataSwipe.views


urlpatterns = [
    path("admin/", admin.site.urls),
    path("", dataSwipe.views.index),
    path("__reload__/", include("django_browser_reload.urls"))
]
