/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

// O(n2), pretty useless

const bubbleSort = (array) => {
  const sortedArray = array;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < sortedArray.length - 1; i++) {
      const first = sortedArray[i];
      const second = sortedArray[i + 1];
      if (first > second) {
        swapped = true;
        sortedArray[i] = second;
        sortedArray[i + 1] = first;
      }
    }
  } while (swapped);

  return sortedArray;
};

module.exports = bubbleSort;
