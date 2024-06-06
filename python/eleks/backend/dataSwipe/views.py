from django.http import Http404, HttpRequest, HttpResponse
from django.template import loader

from dataSwipe.src.views_utils import (
    load_images,
    create_image,
    create_images,
    Keys,

)


def index(request: HttpRequest):
    if request.method != "GET":
        raise Http404("Method not allowed")

    batch_size = 5 # TODO - Get from UI in the request
    batch_index = 0 # TODO - Get from a DB or local storage

    image_tensors, _ = load_images(batch_size=batch_size)

    return HttpResponse(
        loader
        .get_template("images.html")
        .render(
            request=request,
            context={
                Keys.IMAGES: create_images(
                    batch_index=batch_index,
                    batch_size=batch_size,
                    image_tensors=image_tensors,
                ),
            },
        )
    )


def smash_image_batch(request: HttpRequest):
    if request.method != "POST":
        raise Http404("Method not allowed")

    batch_size = int(request.POST[Keys.BATCH_SIZE])
    last_batch_index = int(request.POST[Keys.BATCH_INDEX])

    batch_index = 0
    image_tensors, data_iterator = load_images(batch_size=batch_size)

    for i in range(last_batch_index + 2):
        image_tensors, _ = next(data_iterator)
        batch_index = i


    return HttpResponse(
        loader
        .get_template("images_form.html")
        .render(
            request=request,
            context={
                Keys.IMAGES: create_images(
                    batch_index=batch_index,
                    batch_size=batch_size,
                    image_tensors=image_tensors,
                ),
            },
        )
    )


def pass_image(request: HttpRequest):
    if request.method != "POST":
        raise Http404("Method not allowed")

    request_batch_size = int(request.POST[Keys.BATCH_SIZE])
    request_batch_index = int(request.POST[Keys.BATCH_INDEX])
    request_offset = int(request.POST[Keys.OFFSET])

    image_tensors, data_iterator = load_images(batch_size=request_batch_size)

    for _ in range(request_batch_index + 2):
        image_tensors, _ = next(data_iterator)

    return HttpResponse(
        loader
        .get_template("image_form.html")
        .render(
            request=request,
            context={
                Keys.IMAGE:
                    create_image(
                        batch_index=request_batch_index + 1,
                        batch_size=request_batch_size,
                        image_tensor=image_tensors[request_offset],
                        offset=request_offset,
                ),
            },
        )
    )
