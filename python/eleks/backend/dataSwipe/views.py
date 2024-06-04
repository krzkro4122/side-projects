import json
from django.http import HttpRequest, HttpResponse
from django.template import loader

from dataSwipe.src.dataloader import get_dataloader
from dataSwipe.src.image_converter import ImageUtils

BATCH_INDEX = "batch_index"
OFFSET = "offset"

type ImageData = list[dict[str, any]]


def index(request: HttpRequest):

    dataloader = get_dataloader()
    data_iterator = iter(dataloader)

    image_tensors, _labels = next(data_iterator)
    batch_index = 0
    offset = 0

    if request.method == "POST":
        last_batch_index = int(request.POST[BATCH_INDEX])
        for i in range(last_batch_index + 2):
            image_tensors, _labels = next(data_iterator)
            batch_index = i

        if offset:
            image_tensors[offset], _labels = next(data_iterator)

    images = [
        {
            "image_base64": ImageUtils.tensor2base64(image_tensor),
            "meta": json.dumps({BATCH_INDEX: batch_index, OFFSET: i}),
        }
        for i, image_tensor in enumerate(image_tensors)
    ]

    return HttpResponse(
        loader
        .get_template("images.html" if request.method == "GET" else "images_bare.html")
        .render(
            request=request,
            context={
                "images": images,
            },
        )
    )
