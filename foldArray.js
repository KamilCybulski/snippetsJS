//A rather simple set of functions to multiply all numbers in the array. Can put pretty much any other operator here, just need to update initialValue

const callRight = (fn, ...args) =>
    (...otherArgs) =>
        fn(...otherArgs, ...args);

const fold = (fn, initialValue, [first, ...rest]) =>
    first === undefined
    ? initialValue
    : fn(first, fold(fn, initialValue, rest));

const foldArr = (arr) => callRight(fold, arr);
const multiplyAll = (folder) => folder((a, b) => a * b, 1)



