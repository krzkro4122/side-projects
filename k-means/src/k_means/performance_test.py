import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

__author__ = "wkastelik"
__copyright__ = "wkastelik"
__license__ = "MIT"

from src.k_means.clustering import load_dataset, pipeline
from sklearn.cluster import KMeans
from src.k_means.tests.timer import timer


@timer
def sklearn_implementation():
    df, X = load_dataset('k_means/tests/test_dataset.xlsx')
    km = KMeans(
        n_clusters=3, init='random',
        n_init=10
    )
    y_km = km.fit_predict(X)
    return km.cluster_centers_


@timer
def pipeline_implementation():
    result = None
    for centroids, data, _ in pipeline(10, path='k_means/tests/test_dataset.xlsx'):
        result = centroids
    return result


def make_seperated_plot():
    df, X = load_dataset(r'k_means/tests/test_dataset.xlsx')
    print("Executing time of Our Implementaion:")
    centroid = pipeline_implementation()
    print("Executing time of SKlearn Implementaion:")
    km_centers = sklearn_implementation()

    create_scattters(121, centroid, X, "Our Implemenation")
    create_scattters(122, km_centers, X, "SKlearn Implemenation")
    # Show the graph
    plt.show()


def create_scattters(arg0, arg1, X, arg3):
    # Cut your window in 1 row and 2 columns, and start a plot in the first part
    plt.subplot(arg0)
    plt.scatter(np.array(arg1)[:, 0], np.array(arg1)[:, 1], color='black')
    plt.scatter(X[:, 0], X[:, 1], alpha=0.1)
    plt.title(arg3)


make_seperated_plot()
