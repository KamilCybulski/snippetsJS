const bubbleSort = require('../sorts/bubble-sort');
const insertionSort = require('../sorts/insertion-sort');

describe('Bubble sort', () => {
  it('Returns empty array when passed an empty array', () => {
    expect(bubbleSort([])).toHaveLength(0);
  });

  it('Returns the same array when an passed array with 1 element', () => {
    expect(bubbleSort([1])).toHaveLength(1);
    expect(bubbleSort([1])).toEqual(expect.arrayContaining([1]));
  });

  it('Returns the same array, when passed a sorted array', () => {
    const arr = [1, 2, 6];
    const result = bubbleSort(arr);

    expect(result).toHaveLength(3);
    expect(result[0]).toBe(1);
    expect(result[1]).toBe(2);
    expect(result[2]).toBe(6);
  });

  it('Sorts the array that doesnt hold duplicate values', () => {
    const arr = [2, 9, 3, 7];
    const result = bubbleSort(arr);
    // expected result = [2, 3, 7, 9]

    expect(result).toHaveLength(4);
    expect(result[0]).toBe(2);
    expect(result[1]).toBe(3);
    expect(result[2]).toBe(7);
    expect(result[3]).toBe(9);
  });

  it('Sorts the array that holds duplicate values', () => {
    const arr = [6, 7, 2, 5, 6];
    const result = bubbleSort(arr);
    // expected result = [2, 5, 6, 6, 7]

    expect(result).toHaveLength(5);
    expect(result[0]).toBe(2);
    expect(result[1]).toBe(5);
    expect(result[2]).toBe(6);
    expect(result[3]).toBe(6);
    expect(result[4]).toBe(7);
  });
});


describe('Insertion sort', () => {
  it('Returns empty array when passed an empty array', () => {
    expect(insertionSort([])).toHaveLength(0);
  });

  it('Returns the same array when an passed array with 1 element', () => {
    expect(insertionSort([1])).toHaveLength(1);
    expect(insertionSort([1])).toEqual(expect.arrayContaining([1]));
  });

  it('Returns the same array, when passed a sorted array', () => {
    const arr = [1, 2, 6];
    const result = insertionSort(arr);

    expect(result).toHaveLength(3);
    expect(result[0]).toBe(1);
    expect(result[1]).toBe(2);
    expect(result[2]).toBe(6);
  });

  it('Sorts the array that doesnt hold duplicate values', () => {
    const arr = [2, 9, 3, 7];
    const result = insertionSort(arr);
    // expected result = [2, 3, 7, 9]

    expect(result).toHaveLength(4);
    expect(result[0]).toBe(2);
    expect(result[1]).toBe(3);
    expect(result[2]).toBe(7);
    expect(result[3]).toBe(9);
  });

  it('Sorts the array that holds duplicate values', () => {
    const arr = [6, 7, 2, 5, 6];
    const result = insertionSort(arr);
    // expected result = [2, 5, 6, 6, 7]

    expect(result).toHaveLength(5);
    expect(result[0]).toBe(2);
    expect(result[1]).toBe(5);
    expect(result[2]).toBe(6);
    expect(result[3]).toBe(6);
    expect(result[4]).toBe(7);
  });
});
