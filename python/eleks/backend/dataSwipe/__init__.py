from django import template
from django.template.defaultfilters import stringfilter

register = template.Library()


@register.simple_tag
def image(value):
    return value.lower()
