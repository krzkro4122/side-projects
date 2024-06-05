from django import template

register = template.Library()

@register.inclusion_tag('image_form.html')
def render_image_form(images):
    return {'images': images}


@register.inclusion_tag('image.html')
def render_image(image):
    return {'image': image}
