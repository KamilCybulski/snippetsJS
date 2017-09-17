/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

const quicksort = (arr) => {
  if (arr.length < 2) return arr;

  const pivot = arr[arr.length - 1];
  let smaller = [];
  let bigger = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      smaller = smaller.concat(arr.slice(i, i + 1));
    } else {
      bigger = bigger.concat(arr.slice(i, i + 1));
    }
  }

  return quicksort(smaller).concat([pivot], quicksort(bigger));
};

module.exports = quicksort;
