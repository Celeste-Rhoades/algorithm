function reverseString(text) {
  return [...text].reduce((acc, char) => char + acc, "");
}
// convert num to string
num.toString();

// Reversing a string using .reduce()
function reverseString(text) {
  return [...text].reduce((acc, char) => char + acc, "");
}

// Calling the function on the string equivalent of the integer to be reversed
let reversedString = reverseString(num.toString());

// convert back to integer
let reversedNumber = parseInt(reversedString);

// Adding the corrisponding sign
Math.sign(num);

return reversedNumber * Math.sign(num);

// complete solution
// Reverses a string
function reverseString(text) {
  return [...text].reduce((acc, char) => char + acc, "");
}

// Reverses an integer
function reverseInteger(num) {
  let reversedNumber = parseInt(reverseString(num.toString()));

  return reversedNumber * Math.sign(num);
}
