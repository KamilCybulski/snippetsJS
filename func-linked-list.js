/*The idea is to implement a linked list with just functions (and assignment operators). This is a concept
I've encounetered while reading JavaScript Allonge and I'm doing this to understand it better. */

//Basic combinators
const K = (x) => (y) => x,
      I = (x) => x,
      V = (x) => (y) => (z) => z(x)(y);


//Basic building blocks for the list
const pairFirst = K,
      pairRest = K(I),
      pair = V;

const EMPTYLIST = (whenEmpty, unlessEmpty) => whenEmpty();
const node = (x) => (y) => 
            (whenEmpty, unlessEmpty) => unlessEmpty(pair(x)(y));

//printer for values
const print = (list) => list(
    () => "",
    (currPair) => `${currPair(pairFirst)} ${print(currPair(pairRest))}`
)

const numList = node(1)(node(2)(node(3)(node(4)(node(5)(EMPTYLIST)))));

//Some other functionalities
const reverse = (list, delayed = EMPTYLIST) => list(
    () => delayed,
    (currPair) => reverse(currPair(pairRest), node(currPair(pairFirst))(delayed))
);

const mapWith = (fn, list, delayed = EMPTYLIST) => list(
    () => reverse(delayed),
    (currPair) => mapWith(fn, currPair(pairRest), node(fn(currPair(pairFirst)))(delayed))
)

print(mapWith((x) => x*10, numList));

