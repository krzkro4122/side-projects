import json
from datetime import timedelta, datetime
from django.http import Http404, HttpRequest, HttpResponse
from django.template import loader

from dataSwipe.src.views_utils import (
    create_meta,
    load_images,
    create_image,
    create_images,
    Keys,
)


def index(request: HttpRequest):
    start_time = datetime.now()
    print("Starting...", start_time)
    if request.method != "GET":
        raise Http404("Method not allowed")

    batch_size = 5  # TODO - Get from UI in the request
    batch_index = 0  # TODO - Get from a DB or local storage

    image_tensors, _ = load_images(batch_size=batch_size)

    response = HttpResponse(
        loader.get_template("images.html").render(
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

    print("Finishing...", datetime.now() - start_time)

    return response


def smash_image_batch(request: HttpRequest):
    start_time = datetime.now()
    print("Starting...", start_time)
    if request.method != "POST":
        raise Http404("Method not allowed")

    request_batch_size = int(request.POST[Keys.BATCH_SIZE])
    request_image_metas = [
        request.POST[f"#hiddenInput{i}"] for i in range(request_batch_size)
    ]

    image_metas = [json.loads(image_meta) for image_meta in request_image_metas]

    maximum_batch_index = max([meta[Keys.BATCH_INDEX] for meta in image_metas])

    batch_index = 0
    _image_tensors, data_iterator = load_images(batch_size=request_batch_size)
    image_tensors = []

    for i in range(1, maximum_batch_index + 2):
        _image_tensors, _ = next(data_iterator)

        image_tensors_matching_index = [
            tensor
            for i, tensor in enumerate(_image_tensors)
            if image_metas[i][Keys.BATCH_INDEX] == batch_index
        ]
        if image_tensors_matching_index:
            image_tensors.extend(image_tensors_matching_index)

        batch_index = i

    response = HttpResponse(
        loader.get_template("images_form.html").render(
            request=request,
            context={
                Keys.IMAGES: {
                    Keys.ENTRIES: [
                        create_image(
                            batch_index=meta[Keys.BATCH_INDEX] + 1,
                            batch_size=request_batch_size,
                            image_tensor=image_tensors[i],
                            offset=meta[Keys.OFFSET],
                        )
                        for i, meta in enumerate(image_metas)
                    ],
                    Keys.META: create_meta(
                        batch_size=request_batch_size,
                        batch_index=batch_index,
                    ),
                },
            },
        )
    )

    print("Finishing...", datetime.now() - start_time)

    return response


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
        loader.get_template("image_form.html").render(
            request=request,
            context={
                Keys.IMAGE: create_image(
                    batch_index=request_batch_index + 1,
                    batch_size=request_batch_size,
                    image_tensor=image_tensors[request_offset],
                    offset=request_offset,
                ),
            },
        )
    )
