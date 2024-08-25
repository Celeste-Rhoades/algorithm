function mergeArrays() {
  let arrays = Array.from(arguments);
  console.log(arrays);
  // some more code here
}
// es6
function mergeArrays(...arrays) {
  console.log(arrays);
  // some more code here
}
// combining Arrays
function mergeArrays(...arrays) {
  let jointArray = [];
  arrays.forEach(array => {
    jointArray = [...jointArray, ...array];
  });
  //Some more code here
}
// sets
function mergeArrays(...arrays) {
  let jointArray = [];

  arrays.forEach(array => {
    jointArray = [...jointArray, ...array];
  });
  return [...new Set([...jointArray])];
}
// array.from
function mergeArrays(...arrays) {
  let jointArray = [];

  arrays.forEach(array => {
    jointArray = [...jointArray, ...array];
  });
  return Array.from(new Set([...jointArray]));
}
// filter
function mergeArrays(...arrays) {
  let jointArray = [];

  arrays.forEach(array => {
    jointArray = [...jointArray, ...array];
  });
  const uniqueArray = jointArray.filter(
    (item, index) => jointArray.indexOf(item) === index
  );
  return uniqueArray;
}
// reduce
function mergeArrays(...arrays) {
  let jointArray = [];

  arrays.forEach(array => {
    jointArray = [...jointArray, ...array];
  });
  const uniqueArray = jointArray.reduce((newArray, item) => {
    if (newArray.includes(item)) {
      return newArray;
    } else {
      return [...newArray, item];
    }
  }, []);
  return uniqueArray;
}
