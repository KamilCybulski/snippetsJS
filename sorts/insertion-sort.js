/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

// Not all that useful, good for almost-sorted arrays

const insertionSort = (arr) => {
  const sortedArr = arr.slice();

  for (let i = 1; i < sortedArr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (sortedArr[i] < sortedArr[j]) {
        const val = sortedArr.splice(i, 1)[0];
        sortedArr.splice(j, 0, val);
      }
    }
  }
  return sortedArr;
};

module.exports = insertionSort;
