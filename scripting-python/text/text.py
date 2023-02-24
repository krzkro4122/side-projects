#!/bin/python3
# -*- coding: utf8 -*-

# --- WORDS REMOVAL --- #

file = open("TEXT.txt", "r")
text = file.read()
file.close()

print(text, end="")

words_to_delete = [" się", " i ", " oraz ", " nigdy", " dlaczego"]

for word_to_delete in words_to_delete:
	text = text.replace(word_to_delete, " ")
print(text, end="")

# --- WORDS REPLACMEMENT --- #

file = open("TEXT.txt", "r")
text = file.read()
file.close()

print(text, end="")

words_to_swap = {
		 " i " 		: " oraz ",
		 " oraz " 	: " i ",
		 " nigdy" 	: " prawie nigdy",
		 " dlaczego"	: " czemu"
		}

for word_to_swap in words_to_swap:
	text = text.replace(word_to_swap, words_to_swap[word_to_swap])
print(text, end="")
