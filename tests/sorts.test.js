const bubbleSort = require('../sorts/bubble-sort');
const insertionSort = require('../sorts/insertion-sort');

const test = (name, fn) => {
  describe(name, () => {
    it('Returns empty array when passed an empty array', () => {
      expect(fn([])).toHaveLength(0);
    });

    it('Returns the same array when an passed array with 1 element', () => {
      expect(fn([1])).toHaveLength(1);
      expect(fn([1])).toEqual(expect.arrayContaining([1]));
    });

    it('Returns the same array, when passed a sorted array', () => {
      const arr = [1, 2, 6];
      const result = fn(arr);

      expect(result).toHaveLength(3);
      expect(result[0]).toBe(1);
      expect(result[1]).toBe(2);
      expect(result[2]).toBe(6);
    });

    it('Sorts the array that doesnt hold duplicate values', () => {
      const arr = [2, 9, 3, 7];
      const result = fn(arr);
      // expected result = [2, 3, 7, 9]

      expect(result).toHaveLength(4);
      expect(result[0]).toBe(2);
      expect(result[1]).toBe(3);
      expect(result[2]).toBe(7);
      expect(result[3]).toBe(9);
    });

    it('Sorts the array that holds duplicate values', () => {
      const arr = [6, 7, 2, 5, 6];
      const result = fn(arr);
      // expected result = [2, 5, 6, 6, 7]

      expect(result).toHaveLength(5);
      expect(result[0]).toBe(2);
      expect(result[1]).toBe(5);
      expect(result[2]).toBe(6);
      expect(result[3]).toBe(6);
      expect(result[4]).toBe(7);
    });
  });
};

test('Bubble sort', bubbleSort);
test('Insertion sort', insertionSort);
