from django.http import HttpResponse
from django.template import loader

from dataSwipe.src.dataloader import get_dataloader
from dataSwipe.src.image_converter import ImageUtils


def index(request):
    dataloader = get_dataloader()
    data_iterator = iter(dataloader)
    image_tensors, labels = data_iterator.next()

    image_base64s = [
        ImageUtils.tensor2base64(image_tensor) for image_tensor in image_tensors
    ]

    template = loader.get_template("base.html")
    return HttpResponse(
        template.render(
            request=request,
            context={
                "images": image_base64s,
            },
        )
    )
