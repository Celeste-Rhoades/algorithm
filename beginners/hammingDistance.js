function hammingDistance(stringA, stringB) {
  if (stringA.length !== stringB.length) {
    throw new Error("Strings do not have equal length");
  }

  let result = 0;

  for (let i = 0; i < stringA.length; i++) {
    if (stringA[i] !== stringB[i]) {
      result++;
    }
  }

  return result;
}
