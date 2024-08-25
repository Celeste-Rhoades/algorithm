// for each method
function capSentence(text) {
  let wordsArray = text.toLowerCase().split(" ");
  let capsArray = [];

  wordsArray.forEach(word => {
    capsArray.push(word[0].toUpperCase() + word.slice(1));
  });

  return capsArray.join(" ");
}
// **.slice()** when used on a string extracts a section of the string and returns it as a new string. It receives two arguments; the beginning index which is compulsory and the end index which is only optional.
// using .map and .slice
function capSentence(text) {
  let wordsArray = text.toLowerCase().split(" ");
  let capsArray = wordsArray.map(word => {
    return word[0].toUpperCase() + word.slice(1);
  });
  return capsArray.join(" ");
}
// We use the same technique as before to create wordsArray, an array of all words in the lowercase sentence.

// This time we use the .map() function to loop through every word in the array and execute the same function as before in order to create capsArray, which is an array of the capitalized words.

// In the end we return a capitalized sentence created by joining the words in the capsArray with blank space as the separator.

function capSentence(text) {
  let wordsArray = text.toLowerCase().split(" ");

  let capsArray = wordsArray.map(word => {
    return word.replace(word[0], word[0].toUpperCase());
  });

  return capsArray.join(" ");
}
// Using .map() and .slice()
function capSentence(text) {
  let wordsArray = text.toLowerCase().split(" ");
  let capsArray = wordsArray.map(word => {
    return word[0].toUpperCase() + word.slice(1);
  });
  return capsArray.join(" ");
}
// Using map and replace
function capSentence(text) {
  let wordsArray = text.toLowerCase().split(" ");

  let capsArray = wordsArray.map(word => {
    return word.replace(word[0], word[0].toUpperCase());
  });

  return capsArray.join(" ");
}
