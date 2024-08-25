// for loop immediate larger value position
function whereIBelong(arr, num) {
  arr.sort((a, b) => {
    return a - b;
  });
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length;
}
// for loop determine the number of smaller values
function whereIBelong(arr, num) {
  var counter = 0;
  for (var i = 0; i < arr.length; i++) {
    if (num > arr[i]) {
      counter++;
    }
  }
  return counter;
}

// while loop
function whereIBelong(arr, num) {
  arr.sort((a, b) => {
    return a - b;
  });
  let counter = 0;
  while (num > arr[counter]) {
    counter++;
  }
  return counter;
}
// finding the index of the value directly
function whereIBelong(arr, num) {
  arr.push(num);
  arr.sort((a, b) => a - b);
  return arr.indexOf(num);
}
