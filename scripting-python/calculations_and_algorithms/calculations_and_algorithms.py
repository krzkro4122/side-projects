#!/bin/python3

from random import randrange
import numpy as np

# --- QUADRATIC EQUATION --- #

def calculate_quadratic(a, b, c):
	delta = b**2 - 4 * a * c

	if delta < 0:
		raise Exception("No real roots!")
	elif delta == 0:
		return - b / (2 * a)
	else:
		return (- b + delta**(1/2) ) / (2 * a), (- b - delta**(1/2) ) / (2 * a)

#print(calculate_quadratic(1, 2, 1))  # Case for Delta = 0
#print(calculate_quadratic(1, 4, 1))  # Case for Delta > 0
#print(calculate_quadratic(10, 2, 1)) # Case for Delta < 0 (error)


# --- SORTING --- #

unsorted_array = np.asarray([randrange(100) for _ in range(50)])
# print(f"Unsorted:\n{unsorted_array}")

# Takes last element as pivot and puts all smaller elements to it's left
# and greater elements to it's right. @Returns the pivot's final index.
def prepare_array(array, left, right):

	i = left - 1
	pivot = array[right]

	for j in range(left, right):

		if array[j] <= pivot:

			i += 1
			array[i], array[j] = array[j], array[i]

	array[i + 1], array[right] = array[right], array[i + 1]

	return i + 1

# Quick sort implementation
def my_sort(array, left, right):

	if len(array) <= 1:
		return array

	if left < right:
		pivot =	prepare_array(array, left, right)
		# sort left of pivot
		my_sort(array, left, pivot - 1)
		# sort right of pivot
		my_sort(array, pivot + 1, right)


my_sort(unsorted_array, 0, len(unsorted_array) - 1)
natively_sorted_array = np.sort(unsorted_array)

# print(f"My sort:\n{unsorted_array}")
# print(f"Built-in sort:\n{natively_sorted_array}")
print(f"'Are the arrays sorted the same?'...{(unsorted_array == natively_sorted_array).all()}") # REALLY basic TDD

print(f"And now reverse it so it's descending: {unsorted_array[::-1]}")


# --- SCALAR PRODUCT --- #

a = [1, 2, 12, 4]
b = [2, 4, 2, 8]

def scalar_product(a, b):

	if len(a) != len(b):
		raise Exception("Vector dimensions don't match!")

	sum = 0

	for i in range(len(a)):
		sum += a[i] * b[i]

	return sum

print(f"Scalar product of {a} and {b}: {scalar_product(a, b)}")


# --- THE SUM OF THE MARTIX --- #

n = 128
# Generate two random nxn matrices
M1 = [[randrange(0, 1000) for _ in range(n)] for _ in range(n)]
M2 = [[randrange(0, 1000) for _ in range(n)] for _ in range(n)]

# Sum them
def sum_matrices(M1, M2):

	for i in range(len(M1)):
		for j in range(len(M1[0])):
			M1[i][j] += M2[i][j]

	return M1

# Print them
def print_matrix(M):
	for row in M:
		print(row)

# print(f"Matrix1:")
# print_matrix(M1)
# print(f"Matrix2:")
# print_matrix(M2)
# print(f"Sum:")
# print_matrix(sum_matrices(M1, M2))


# --- MATRIX MULTIPLICATION --- #

n = 8
# Generate two random nxn matrices
M1 = [[randrange(0, 10) for _ in range(n)] for _ in range(n)]
M2 = [[randrange(0, 10) for _ in range(n)] for _ in range(n)]

def multiply_matrices(M1, M2):

	M3 = [[0 for _ in range(n)] for _ in range(n)]

	# dimensions of output matrix
	width = len(M1[0])
	heigth = len(M2)

	# Transpose second matrix
	M2 = [[M2[j][i] for j in range(len(M2))] for i in range(len(M2[0]))]

	for i, row in enumerate(M1):
		for j, column in enumerate(M2):

			M3[i][j] = scalar_product(row, column)

	return M3
print("Matrix 1:")
print_matrix(M1)
print("Matrix 2:")
print_matrix(M2)
print("Their product:")
print_matrix(multiply_matrices(M1, M2))


# --- DETERMINANT OF THE MATRIX --- #

n = 3
M3 = [[i + j * n for i in range(n)] for j in range(n)]
# Matrix:
# [0, 1, 2, 3]
# [4, 5, 6, 7]
# [8, 9, 10, 11]
# [12, 13, 14, 15]

positive, negative = 0, 0

for i in range(len(M3[0])):
	temp = 1
	for j in range(len(M3)):
		temp *= M3[j][(i + j) % len(M3[0])]
	positive += temp

for i in range(len(M3[0])):
	temp = 1
	for j in range(len(M3))[::-1]:
		temp *= M3[j][(i - j) % len(M3[0])]
	negative += temp

determinant = positive - negative
