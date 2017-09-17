// O(n log n), so pretty good. It's consistent and stable.
// Maybe a little heave on the memory

const mergeSort = (arr) => {
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

  if (arr.length < 2) return arr;

  const mid = Math.trunc(arr.length / 2);
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
};


module.exports = mergeSort;
