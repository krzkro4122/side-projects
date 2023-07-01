import numpy as np
import pandas as pd
import pytest

__author__ = "miwiacek_agh"
__copyright__ = "miwiacek_agh"
__license__ = "MIT"

from src.k_means.clustering import load_dataset, initialize_centroids, find_closest_centroids, calc_new_centroids, pipeline

# Run tests from src using python -m pytest


def test_load_dataset():
    loaded_dataset = load_dataset('k_means/tests/test_dataset.xlsx')
    assert type(loaded_dataset[0]) is pd.DataFrame and type(loaded_dataset[1]) is np.ndarray
    assert len(loaded_dataset[0]) == 150


def test_initialize_centroids():
    df, _ = load_dataset('k_means/tests/test_dataset.xlsx')
    centroids = initialize_centroids(5, df)
    assert type(centroids) is np.ndarray
    assert len(centroids) == 5


def test_find_closest_centroids():
    # Assert that for values definitely closer to (0, 0) no other centroid is assigned
    centroids = [[0, 0], [5, 5]]
    dataPoints = np.random.randint(low=-1, high=1, size=(150, 2))  # Generate points confined in the (0, 0, r=2) circle
    centroidIndexes = find_closest_centroids(centroids, dataPoints)
    assert type(centroidIndexes) is list
    assert len(centroidIndexes) == 150
    assert all(idx == 0 for idx in centroidIndexes)


# Randomly created centroids and points /should/ change (the chance of that not happening is very low) the centroid indexes after an iteration
def test_calc_new_centroids():
    centroids = np.random.randint(0, 1, (100, 1))
    dataPoints = np.random.randint(10, 20, (100, 2))
    assert not np.array_equal(find_closest_centroids(calc_new_centroids(centroids, dataPoints), dataPoints), centroids)


def test_pipeline():
    result = None
    for centroids, data, _ in pipeline(4, path='k_means/tests/test_dataset.xlsx'):
        assert not np.array_equal(result, centroids)
        result = centroids
