const EMPTY = {
    isEmpty: () => true
}

const isEmpty = (node) => node === EMPTY;

const PAIR = (first, rest = EMPTY) => (
    {
        first,
        rest,
        isEmpty: () => {return false},
        [Symbol.iterator] () {
            let currentPair = this;

            return {
                next() {
                    if (currentPair.isEmpty()) {
                        return {done: true};
                    }
                    else {
                        const value = currentPair.first;
                        currentPair = currentPair.rest;

                        return {done: false, value};
                    }
                }
            }
        }
    }
)

const list = (...elements) => {
    const [first, ...rest] = elements;

    return elements.length === 0
            ? EMPTY 
            : PAIR(first, list(...rest))
}

const sumAll = (collection) => {
    let sum = 0;
    for (let i of collection){
        sum += i;
    }
    return sum;
}