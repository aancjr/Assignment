# Assignment


To view the assignment: https://aancjr.github.io/Assignment/


Question 1: Coding + Complexity

For the coding exercise, you may use any language you would like. Please include code,
instructions on how to run your code, and a short explanation of the time and space complexity
of your algorithm using BigO notation.

Write a function that takes in two arrays of colors (strings) as input and returns a new array as
output. We’ll call the two input arrays the items array and the order array. The strings in
order are unique. The strings in items are not guaranteed to be unique. The output of the
function should use the order array to determine the order of items. If a value does not
appear in the order array, it should not be included in the output. You may assume both inputs
are valid arrays.

Example input:
items = [“red”, “blue”, “red”, “green”, “blue”] // Length = n
order = [“blue”, “red”, “black”] // Length = k

Expected output:
[“blue”, “blue”, “red”, “red”]
