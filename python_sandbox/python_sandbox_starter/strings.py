# Strings in python are surrounded by either single or double quotation marks. Let's look at string formatting and some string methods

name = "Jatin"
age = 19

# Concatenate
# print("Hello, my name is " + name + " and I am " + str(age))      Ony string concat is allowed


# String Formatting

# Arguments by position
# print("My name is {name} and I am {age}".format(name=name, age=age))

# F-Strings (3.6+)
# print(f"Hello, my name is {name} and I am {age}")   Similar to JS

# String Methods

s = "hello world"

# Capitalize string
print(s.capitalize())

# Make all uppercase
print(s.upper())

# Make all lower
print(s.lower())

# Swap case
print(s.swapcase())

# Get length
print(len(s))

# Replace
print(s.replace("world", "everyone"))

# Count
sub = "h"
print(s.count(sub))

# Starts with
print(s.startswith("hello"))

# Ends with
print(s.endswith("d"))

# Split into a list
print(s.split())

# Find position
print(s.find("h"))

# Is all alphanumeric
print(s.isalnum())  # False because of space

# Is all alphabetic
print(s.isalpha())  #  ''

# Is all numeric
print(s.isnumeric())
