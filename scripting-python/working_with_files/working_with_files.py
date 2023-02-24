#!/bin/python3

import os, os.path

# --- FILES COUNT --- #
path = "/dev"

number_of_all = len(os.listdir(path))
number_of_only_files = len([name for name in os.listdir(path) if os.path.isfile(name)])

print(f"Number of files and dirs in '{path}': {number_of_all}")
print(f"Number of ONLY regular files in '{path}': {number_of_only_files}")

# --- DIRECTORY'S STRUCTURE --- #

def recursive_listing(path, depth_ID=1, tab="\t"):
	dirs = []
	print(tab * (depth_ID-1) + path.split("/")[-1])
	for name in os.listdir(path):
		if not os.path.isdir(path + "/" + name):
			print(tab * depth_ID + name)
		else:
			dirs.append(name)
	for dir in dirs:
		recursive_listing(path + "/" + dir, depth_ID+1, tab=tab)

recursive_listing(".")

# --- EXTENSIONS CONVERTING --- #
path = "./files_to_convert"

current_dir = os.getcwd()

# Go to the directory containing .jpg files
os.chdir(path)

# Change all .jpgs to .pngs and the other way around
for file in os.listdir("."):
	name, extension = file.split(".")
	if extension in "jpg":
		os.rename(file, name + ".png")
	elif extension in "png":
		os.rename(file, name + ".jpg")

# Go back to original directory
os.chdir(current_dir)
