from dataclasses import dataclass
import json

from .image_converter import ImageUtils
from .dataloader import get_dataloader

@dataclass
class Keys():
    IMAGE_TENSORS = "image_tensors"
    BATCH_INDEX = "batch_index"
    BATCH_SIZE = "batch_size"
    OFFSET = "offset"
    IMAGES = "images"
    IMAGE = "image"
    ENTRIES = "entries"
    META = "meta"

type ImageData = list[dict[str, any]]


def create_meta(batch_index: int, batch_size: int, offset=0):
    return json.dumps({
        Keys.BATCH_INDEX: batch_index,
        Keys.OFFSET: offset,
        "batch_size": batch_size,
    })


def create_image(
    batch_index: int,
    batch_size: int,
    image_tensor,
    offset: int
):
    return {
        "image_base64": ImageUtils.tensor2base64(image_tensor),
        Keys.META: create_meta(batch_size=batch_size, batch_index=batch_index, offset=offset),
        "index": batch_index * batch_size + offset,
        Keys.OFFSET: offset,
    }


def create_images(**kwargs):
    image_tensors = kwargs[Keys.IMAGE_TENSORS]
    del kwargs[Keys.IMAGE_TENSORS]
    return {
        Keys.ENTRIES: [
            create_image(**{
                **kwargs,
                "offset": i,
                "image_tensor": image_tensor
            })
            for i, image_tensor in enumerate(image_tensors)
        ],
        Keys.META: create_meta(**kwargs)
    }


def load_images(batch_size: int):
    dataloader = get_dataloader(batch_size=batch_size)
    data_iterator = iter(dataloader)
    image_tensors, _ = next(data_iterator)
    return image_tensors, data_iterator
