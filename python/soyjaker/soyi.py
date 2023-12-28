import os
import sys

import cv2 as cv
import numpy as np

from matplotlib import pyplot as plt

path = sys.argv[1]
name = os.path.basename(path).split(".")[0]

img = cv.imread(f'{path}', cv.IMREAD_GRAYSCALE)

assert img is not None, "file could not be read, check with os.path.exists()"

edges = cv.Canny(img, 100, 200)

cv.imwrite(f"outputs/{name}_edging.png", edges)
