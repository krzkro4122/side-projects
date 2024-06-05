import json
from django.http import Http404, HttpRequest, HttpResponse
from django.template import loader

from dataSwipe.src.dataloader import get_dataloader
from dataSwipe.src.image_converter import ImageUtils

IMAGE_TENSORS = "image_tensors"
BATCH_INDEX = "batch_index"
BATCH_SIZE = "batch_size"
OFFSET = "offset"
IMAGES = "images"
ENTRIES = "entries"
META = "meta"

type ImageData = list[dict[str, any]]


def _create_meta(batch_index: int, batch_size: int, i=0):
    return json.dumps({
        BATCH_INDEX: batch_index,
        OFFSET: i,
        "batch_size": batch_size,
    })


def _create_image(
    batch_index: int,
    batch_size: int,
    image_tensor,
    i: int
):
    return {
        "image_base64": ImageUtils.tensor2base64(image_tensor),
        META: _create_meta(batch_size=batch_size, batch_index=batch_index, i=i),
        "index": batch_index * batch_size + i,
    }


def _create_images(**kwargs):
    image_tensors = kwargs[IMAGE_TENSORS]
    del kwargs[IMAGE_TENSORS]
    return {
        ENTRIES: [
            _create_image(**{
                **kwargs,
                "i": i,
                "image_tensor": image_tensor
            })
            for i, image_tensor in enumerate(image_tensors)
        ],
        META: _create_meta(**kwargs)
    }


def _load_images(batch_size: int):
    dataloader = get_dataloader(batch_size=batch_size)
    data_iterator = iter(dataloader)
    image_tensors, _ = next(data_iterator)
    return image_tensors, data_iterator


def index(request: HttpRequest):
    if request.method != "GET":
        raise Http404("Method not allowed")

    batch_size = 5 # TODO - Get from UI in the request
    batch_index = 0 # TODO - Get from a DB or local storage

    image_tensors, _ = _load_images(batch_size=batch_size)

    return HttpResponse(
        loader
        .get_template("images.html")
        .render(
            request=request,
            context={
                IMAGES: _create_images(
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

    batch_index = 0
    print(request.POST)
    batch_size = int(request.POST[BATCH_SIZE])
    image_tensors, data_iterator = _load_images(batch_size=batch_size)

    last_batch_index = int(request.POST[BATCH_INDEX])
    for i in range(last_batch_index + 2):
        image_tensors, _ = next(data_iterator)
        batch_index = i

    return HttpResponse(
        loader
        .get_template("image_form.html")
        .render(
            request=request,
            context={
                IMAGES: _create_images(
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

    batch_index = 0
    image_tensors, data_iterator = _load_images(batch_size=1)

    request_batch_index = int(request.POST[BATCH_INDEX])
    request_batch_size = int(request.POST[BATCH_SIZE])
    for i in range(request_batch_index + 2):
        image_tensors, _ = next(data_iterator)
        batch_index = i

    return HttpResponse(
        loader
        .get_template("image.html")
        .render(
            request=request,
            context={
                IMAGES: _create_images(
                    batch_index=batch_index,
                    batch_size=request_batch_size,
                    image_tensors=image_tensors,
                ),
            },
        )
    )
