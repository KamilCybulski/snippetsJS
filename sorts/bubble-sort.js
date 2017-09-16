/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

const bubbleSort = (array) => {
  let sortedArray;

  const sort = (toSort) => {
    let swapped;
    const arr = toSort;

    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        const first = arr[i];
        const second = arr[i + 1];

        if (first > second) {
          swapped = true;
          arr[i] = second;
          arr[i + 1] = first;
        }
      }
    } while (swapped);
    return arr;
  };

  switch (array.length) {
    case 0:
      sortedArray = [];
      break;
    case 1:
      sortedArray = array;
      break;
    default:
      sortedArray = sort(array);
  }
  return sortedArray;
};

module.exports = bubbleSort;
