import io
import time
import typing


def timer(callback):
    def wrapper(*args, **kwargs):
        start_time = time.time()
        rv = callback(*args, **kwargs)
        print(f'Took: {time.time() - start_time}s -> Result: {rv}')
    return wrapper


@timer
def concat_io():
    ss = io.StringIO()
    for i in range(100):
        ss.write(f'Some string {i}')
    s = ss.getvalue()
    # print(s)
    return s


@timer
def concat_plus():
    ss = ''
    for i in range(100):
        ss += f'Some string {i}'
    # print(ss)
    return ss


concat_io()
concat_plus()


# def named_tuple_usage():
#     class Point(typing.NamedTuple):
#         x: float
#         y: float
#         z: float

#     p = Point(1., 2., 3.)
#     print(p)
#     print(p.x, p.y, p.z)
#     print(p.x + p.y + p.z)

# named_tuple_usage()