from django.contrib import admin
from django.urls import path, include

import dataSwipe.views


urlpatterns = [
    path("admin/", admin.site.urls),
    path("", dataSwipe.views.index),
    path("smash_image_batch", dataSwipe.views.smash_image_batch),
    path("pass_image", dataSwipe.views.pass_image),
    path("__reload__/", include("django_browser_reload.urls"))
]
