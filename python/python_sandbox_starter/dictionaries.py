# A Dictionary is a collection which is unordered, changeable and indexed. No duplicate members.
# Similar to object literal in JS, hash in Ruby

# Create dict
person = {"first_name": "Jatin", "last_name": "Singh", "age": 19}

# Use constructor
# person2 = dict(first_name="Sara", last_name="Williams")

# Get value
print(person["first_name"])  # Similar to person.first_name in JS
print(person.get("last_name"))

# Add key/value
person["phone"] = "555-555-5555"

# Get dict keys
print(person.keys())

# Get dict items
print(person.items())

# Copy dict
person2 = person.copy()  # Similar to spread in ES6
person2["city"] = "Bareilly"

# Remove item
del person["age"]
person.pop("phone")

# Clear
person.clear()

# Get Length
print(len(person2))

# List of dict          Like array of objects in JS
people = [{"name": "Martha", "age": 30}, {"name": "Kevin", "age": 25}]

print(people[1]["name"])

