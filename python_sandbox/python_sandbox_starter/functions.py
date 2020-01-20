# A function is a block of code which only runs when it is called. In Python, we do not use parentheses and curly brackets, we use indentation with tabs or spaces

# Create function
def sayHello(name="Sam"):
    print(f"Hello {name}")


# Return values
def getSum(num1, num2):
    total = num1 + num2
    return total


# print(getSum(1, 2))
# num = getSum(3, 4)
# print(num)


# A lambda function is a small anonymous function.
# A lambda function can take any number of arguments, but can only have one expression. Very similar to JS arrow functions

getSum = lambda num1, num2: num1 + num2

print(getSum(10, 3))
