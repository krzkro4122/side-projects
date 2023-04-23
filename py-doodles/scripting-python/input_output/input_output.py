#!/bin/python3
import os

# --- HELLO WORLD --- #

print("Hello World")


# --- INPUTTING DATA --- #

# Get stdin from user
user_info = input("Please enter your: First name, Last name, Year of Birth\n")

# Hope that user did what we asked and separate gotten values into a list
user_info = user_info.split(sep=", ")

# Display as a form of confirmation
print("Your information:")
for piece_of_user_info in user_info:
	print(f"{piece_of_user_info}")


# --- CODE LOCK --- #

# Get the code from stdin
code = input("Please input the code: ")
# What filename to save the code in
file_name = "code.txt"

# Check if the file already exists
# Given it does - check if the containing code matches the input one
# If the file isn't there, create one and populate it with our code
# Print results and close the file buffer
if file_name in os.listdir("."):
	f = open(file_name, "r")
	if f.read() == code:
		print("Correct code. Will nuke Japan now.")
	else:
		print("Incorrect code.")
	f.close()
else:
	f = open(file_name, "w")
	f.write(code)
	f.close()
	print("Code saved.")
