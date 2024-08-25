// intuitive approach
function palindromeChecker(text) {
  var reversedText = text.toLowerCase().split("").reverse().join("");

  return text === reversedText;
}

// looping through Comparing characters
function palindromeChecker(text) {
  let charArray = text.toLowerCase().split("");

  let result = charArray.every((letter, index) => {
    return letter === charArray[charArray.length - index - 1];
  });

  return result;
}

// looping through Comparing characters optimized
function palindromeChecker(text) {
  var textLen = text.length;
  for (var i = 0; i < textLen / 2; i++) {
    if (text[i] !== text[textLen - 1 - i]) {
      return false;
    }
  }
  return true;
}
