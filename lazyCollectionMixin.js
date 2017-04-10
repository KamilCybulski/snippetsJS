//Set of more commonly used methods that can be applied to any ordered //collection that is also an iterable
//From JavaScript Allonge by Reginald Braithwaite


const extend = function (consumer, ...providers) {
  for (let i = 0; i < providers.length; ++i) {
    const provider = providers[i];
    for (let key in provider) {
      if (provider.hasOwnProperty(key)) {
        consumer[key] = provider[key]
      }
    }
  }
  return consumer
};

const LazyCollection = {
  map(fn) {
    return Object.assign({
      [Symbol.iterator]: () => {
        const iterator = this[Symbol.iterator]();

        return {
          next: () => {
            const {
              done, value
            } = iterator.next();

            return ({
              done, value: done ? undefined : fn(value)
            });
          }
        }
      }
    }, LazyCollection);
  },

  reduce(fn, seed) {
    const iterator = this[Symbol.iterator]();
    let iterationResult,
    accumulator = seed;

    while ((iterationResult = iterator.next(), !iterationResult.done)) {
      accumulator = fn(accumulator, iterationResult.value);
    }
    return accumulator;
  },

  filter(fn) {
    return Object.assign({
      [Symbol.iterator]: () => {
        const iterator = this[Symbol.iterator]();

        return {
          next: () => {
            do {
              const {
                done, value
              } = iterator.next();
            } while (!done && !fn(value));
            return {
              done, value
            };
          }
        }
      }
    }, LazyCollection)
  },

  find(fn) {
    for(const element of this){
        if(fn(element)) return element
    }
  },

  until(fn) {
    return Object.assign({
      [Symbol.iterator]: () => {
        const iterator = this[Symbol.iterator]();

        return {
          next: () => {
            let {
              done, value
            } = iterator.next();

            done = done || fn(value);

            return ({
              done, value: done ? undefined : value
            });
          }
        }
      }
    }, LazyCollection)
  },

  first() {
    return this[Symbol.iterator]().next().value;
  },

  rest() {
    return Object.assign({
      [Symbol.iterator]: () => {
        const iterator = this[Symbol.iterator]();

        iterator.next();
        return iterator;
      }
    }, LazyCollection);
  },

  take(numberToTake) {
    return Object.assign({
      [Symbol.iterator]: () => {
        const iterator = this[Symbol.iterator]();
        let remainingElements = numberToTake;

        return {
          next: () => {
            let {
              done, value
            } = iterator.next();

            done = done || remainingElements-- <= 0;

            return ({
              done, value: done ? undefined : value
            });
          }
        }
      }
    }, LazyCollection);
  }
}