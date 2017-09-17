// O(n log n), so pretty good. It's consistent and stable.
// Maybe a little heave on the memory

const mergeSort = (arr) => {
  const mid = Math.trunc(arr.length / 2);
  let sortedArr;

  const merge = (arr1, arr2) => {
    if (arr1.length === 0) return arr2;
    if (arr2.length === 0) return arr1;

    if (arr1[0] > arr2[0]) {
      const element = [arr2[0]];
      return element.concat(merge(arr1, arr2.slice(1)));
    }

    const element = [arr1[0]];
    return element.concat(merge(arr1.slice(1), arr2));
  };

  switch (arr.length) {
    case 0:
      sortedArr = [];
      break;

    case 1:
      sortedArr = arr;
      break;

    default:
      sortedArr = merge(arr.slice(0, mid), arr.slice(mid));
  }
  return sortedArr;
};


module.exports = mergeSort;
