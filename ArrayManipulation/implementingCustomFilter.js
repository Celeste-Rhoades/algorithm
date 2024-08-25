//imperative Approach
function arrayFilter(arr, func) {
  for (let elem of arr) {
    if (func(elem)) {
      return elem;
    }
  }
  return undefined;
}
// .filter()
function arrayFilter(arr, func) {
  let filteredArray = arr.filter(func);
  return filteredArray[0] ? filteredArray[0] : undefined;
}
//   find()
function arrayFilter(arr, func) {
  return arr.find(func);
}
