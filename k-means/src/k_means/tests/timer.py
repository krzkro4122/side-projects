import time

def timer(func):

    def wrapper(*args, **kwargs):
        start = time.time()
        rv = func(*args, **kwargs)
        total = time.time() - start
        print("Took {:.2f}s".format(total))

        return rv

    return wrapper

