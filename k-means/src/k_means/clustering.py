"""
Note:
    This module serves as an entry point for k_means algorithm API

References:
    - https://setuptools.readthedocs.io/en/latest/userguide/entry_point.html
    - https://pip.pypa.io/en/stable/reference/pip_install
"""

import argparse
import logging
import random
import sys

import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
from sklearn.datasets._samples_generator import make_blobs

__author__ = "krkrol"
__copyright__ = "krkrol"
__license__ = "MIT"

_logger = logging.getLogger(__name__)


def load_dataset(path: str):
    """Load a dataset from an Excel spreadsheet and return it as a pandas.DataFrame and a numpy.ndarray

    Args:
      path (str): path to Excel spreadsheet

    Returns:
      pandas.DataFrame: loaded dataset
      numpy.ndarray:    loaded dataset as numpy array
    """
    df = pd.read_excel(path, header=None)
    return df, np.array(df)


def generate_dataset(n_samples: int = 150, clusters: int = 3):
    """Generate a given number of randomly distribuited clusters with
    using n_samples.

    Args:
      n_samples (int): count of samples to used to generate clusters
      clusters (int):  count of clusters to generate

    Returns:
      pd.DataFrame:  data frame consisting of generated points
      numpy.ndarray: array of generated points
    """
    X, _ = make_blobs(n_samples=n_samples, centers=clusters)

    return pd.DataFrame(X), X


def initialize_centroids(number_of_centroids, df):
    """Initialize a given number of centroids.
    While they are not randomly generated, they do not need to be.

    Args:
     number_of_centroids (int): integer
     df: pandas.DataFrame

    Returns:
      numpy.ndarray:    array of centroid locations
    """
    return np.array(df.sample(n=number_of_centroids))


def calc_distance(p1, p2):
    """Calculate distance between 2 points

    Args:
      p1, p2 (iterable): points on cartesian plane

    Returns:
      float: distance calculated between p1 and p2
    """
    return (sum((p1 - p2) ** 2)) ** 0.5


def find_closest_centroids(centroids, data_points):
    """Function assigning an index of the closest centroid to each data point

    Args:
      centroids (iterable): list of centroids
      data_points (iterable)


    Returns:
      iterable: a len(data_points) long array with centroid indexes as values for each point in data_points
    """
    assigned_centroid = []
    for i in data_points:
        distance = [calc_distance(i, j) for j in centroids]
        assigned_centroid.append(np.argmin(distance))
    return assigned_centroid


def calc_new_centroids(centroid_indexes, data_points):
    """Calculate positions of new centroids based on the average value of the clusters' points

    Args:
      centroid_indexes (iterable): list of centroids to be moved into new positions
      data_points (iterable): list of data points, should have same indexing as find_closest_centroid argument

    Returns:
      pandas.DataFrame: DataFrame of new centroid coordinates
    """
    new_centroids = []
    new_df = pd.concat([pd.DataFrame(data_points), pd.DataFrame(centroid_indexes, columns=["cluster"])], axis=1)
    for c in set(new_df["cluster"]):
        current_cluster = new_df[new_df["cluster"] == c][new_df.columns[:-1]]
        cluster_mean = current_cluster.mean(axis=0)
        new_centroids.append(cluster_mean)
    return new_centroids


def pipeline(n_iterations, n_centroids=3, path=r"dataset.xlsx", random_dataset=False, n_samples=150):
    """Load dataset, prepare centroids and execute the k-means algorithm n_iterations times

    Args:
      n_iterations (int): number of times that new centroid positions are to be calculated
      n_centroids (int): numbers of centroids to be generated
      path (str): path to dataset, ignored if random_dataset=True
      random_dataset (bool): random samples are generated instead of reading from an excel file
      n_samples (int): size of the random dataset

    Yields:
        iterable: list of new coordinates for the centroids
        iterable: list of points from dataset
        iterable: list of a centroid' index assigned to each point from dataset
    """
    if not random_dataset:
        df, X = load_dataset(path)
    else:
        df, X = generate_dataset(n_samples, clusters=n_centroids)
    centroids = initialize_centroids(n_centroids, df)
    for _ in range(n_iterations):
        get_centroids = find_closest_centroids(centroids, X)
        centroids = calc_new_centroids(get_centroids, X)
        yield centroids, X, get_centroids


# ---- CLI ----
# The functions defined in this section are wrappers around the main Python
# API allowing them to be called directly from the terminal as a CLI
# executable/script.


def parse_args(args):
    """Parse command line parameters

    Args:
      args (List[str]): command line parameters as list of strings
          (for example  ``["--help"]``).

    Returns:
      :obj:`argparse.Namespace`: command line parameters namespace
    """
    parser = argparse.ArgumentParser(description="k_means clustering algorithm showcase")
    parser.add_argument(
        "--version",
        action="version",
        # version="k_means {ver}".format(ver=__version__),
    )
    parser.add_argument(dest="n", help="n cluster centroids (1-10). Our dataset has 3 clusters. If you need more clusters - use the random option.", type=int, metavar="INT", choices=range(1, 11))
    parser.add_argument(
        "-v",
        "--verbose",
        dest="log_level",
        help="set log_level to INFO",
        action="store_const",
        const=logging.INFO,
    )
    parser.add_argument(
        "-vv",
        "--very-verbose",
        dest="log_level",
        help="set log_level to DEBUG",
        action="store_const",
        const=logging.DEBUG,
    )
    parser.add_argument("--plot", "-p", help="Display iterations using matplotlib", action="store_true")
    parser.add_argument(
        "--random",
        "-r",
        help="Use data from random dataset generator",
        type=int,
        nargs='?',
        const=150,  # Default value if -r is supplied
        default=None,  # Default value if -r is not supplied
        metavar='INT')

    return parser.parse_args(args)


def setup_logging(log_level):
    """Setup basic logging

    Args:
      log_level (int): minimum log_level for emitting messages
    """
    logformat = "[%(asctime)s] %(levelname)s:%(name)s:%(message)s"
    logging.basicConfig(level=log_level, stream=sys.stdout, format=logformat, datefmt="%Y-%m-%d %H:%M:%S")


def main(args):
    """Wrapper allowing :func:`k_means` to be called with string arguments in a CLI fashion

    Instead of returning the value from :func:`k_means`, it prints the result to the
    ``stdout`` in a nicely formatted message.

    Args:
      args (List[str]): command line parameters as list of strings
          (for example  ``["--verbose", "42"]``).
    """
    args = parse_args(args)

    setup_logging(args.log_level)
    _logger.debug("Starting crazy calculations...")

    # Returns a random color in #XXXXXX format, where X is a hex value
    def generate_hex_color():
        return "#" + "".join([random.choice("0123456789ABCDEF") for _ in range(6)])

    possible_centroid_indexes = range(args.n)
    colors = {index: generate_hex_color() for index in possible_centroid_indexes}

    if args.random:
        # Actual calls to our content
        for iteration, data, assigned_centroids in pipeline(10, n_centroids=args.n, random_dataset=True, n_samples=args.random):

            df = pd.DataFrame(dict(X=data[:, 0], Y=data[:, 1], assigned_centroids=assigned_centroids))

            if args.plot:
                plt.figure()
                plt.scatter(np.array(iteration)[:, 0], np.array(iteration)[:, 1], color="black", marker="x", s=100)
                plt.scatter(df["X"], df["Y"], alpha=0.3, c=df["assigned_centroids"].map(colors))
                plt.show()
    else:
        # Actual calls to our content
        for iteration, data, assigned_centroids in pipeline(10, n_centroids=args.n):

            df = pd.DataFrame(dict(X=data[:, 0], Y=data[:, 1], assigned_centroids=assigned_centroids))

            if args.plot:
                plt.figure()
                plt.scatter(np.array(iteration)[:, 0], np.array(iteration)[:, 1], color="black", marker="x", s=100)
                plt.scatter(df["X"], df["Y"], alpha=0.3, c=df["assigned_centroids"].map(colors))
                plt.show()

    _logger.info("Script ends here")


def run():
    """Calls :func:`main` passing the CLI arguments extracted from :obj:`sys.argv`

    This function can be used as entry point to create console scripts with setuptools.
    """
    main(sys.argv[1:])


if __name__ == "__main__":
    run()
