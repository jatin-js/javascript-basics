# A Tuple is a collection which is ordered and unchangeable. Allows duplicate members.

# Create tuple
fruits = ("Apples", "Oranges", "Grapes")
# fruits2 = tuple(("Apples", "Oranges", "Grapes"))

# fruits2 = "apples"  Actually i am typing fruits = ("apples") but on saving it get converted to "apples" only which is string. So to declare a tuple with single value, put a trailing comma. Eg. fruits = ('apples',)

# Single value needs trailing comma
fruits2 = ("apples",)

# Get value
print(fruits[1])

# Can't change value
# fruits[0] = "Pears"

# Delete tuple
del fruits2

# Get length
print(len(fruits))


# A Set is a collection which is unordered and unindexed. No duplicate members.

# Create set
fruits_set = {"Apples", "Oranges", "Mango"}

# Check if in set
print("Apples" in fruits_set)

# Add to set
fruits_set.add("Grape")

# Remove from set
fruits_set.remove("Grape")

# Add duplicate
fruits_set.add("Apples")  # Just doesn't add 'Apples' twice

# clear set
# fruits_set.clear()  # Just clearing

# Delete
# del fruits_set  # deleting just like it was never defined


print(fruits_set)
