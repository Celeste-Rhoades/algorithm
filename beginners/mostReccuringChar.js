// We need to keep track of every character in the string as well as the number of times it exists.
let charMap = {};

for (let char of text) {
  if (charMap.hasOwnProperty(char)) {
    charMap[char]++;
  } else {
    charMap[char] = 1;
  }
}
// Having initialized charMap to an empty object, we use a for…of loop to iterate through the string of text. For every character, we check if it has been mapped already(is a property of the charMap object) by calling the .hasOwnProperty() method on the object. If it is, we increment its value, otherwise it is added as a property and its value is set to 1.

// Having created our character map, we can now focus on actually solving the problem. We need to return the character that is most recurring. Let us now consider two ways to do this.

function maxRecurringChar(text) {
  let charMap = {};
  let maxCharValue = 0;
  let maxChar = "";

  for (let char of text) {
    if (charMap.hasOwnProperty(char)) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > maxCharValue) {
      maxCharValue = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}
// You'd notice that within the maxRecurringChar function above, we use the snippet earlier considered to generate a character map of the received string of text.

// For looping through the charMap object, we initialize two variables at the beginning.

// maxCharValue is used to store the maximum value yet encountered at the point of every iteration with the for…in loop.
// maxChar is used to store the character with the highest value on every iteration.
// As we run through with the for…in loop, we check if the character being evaluated has a greater value than our maxCharValue which is initially zero. If it is, it becomes the new maxCharValue and the character is stored in maxChar. If it is not, we move on to the next character.

// At the end, we return maxChar which now holds the character with the highest value, thus the most recurring.

function maxRecurringChar(text) {
  let charMap = {};
  let charArray = [];
  let vaulesArray = [];
  let maxCharValue = 0;

  for (let char of text) {
    if (charMap.hasOwnProperty(char)) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  charArray = Object.keys(charMap);
  vaulesArray = Object.values(charMap);
  maxCharValue = Math.max(...vaulesArray);

  return charArray[vaulesArray.indexOf(maxCharValue)];
}
// charArray = ['a', 'b', 'c','d']
// valuesArray = [4,3,2,1]
