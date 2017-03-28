//This is an algrithm for folding multidimensional arrays

const foldMultiArr = (fn, initVal, [first, ...rest]) =>
    first === undefined
    ? initVal
    : Array.isArray(first)
        ? fn(foldMultiArr(fn, initVal, first), foldMultiArr(fn, initVal, rest))
        : fn(first, foldMultiArr(fn, initVal, rest));

const callRight = (fn, ...args) =>
    (...otherArgs) =>
        fn(...otherArgs, ...args);

const foldArr = (arr) => callRight(foldMultiArr, arr);

const sumArr = (foldingFn) => foldingFn((a,b) => a + b, 0);
const mulitplyArrVals = (foldingFn) => foldingFn((a, b) => a * b, 1);