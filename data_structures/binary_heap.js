/* eslint-disable no-param-reassign */
/* eslint-disable no-constant-condition */
/* eslint-disable no-plusplus */
/* eslint-disable no-continue */

const BinaryHeap = (() => {
  const content = Symbol('content');
  const bubbleUp = Symbol('bubbleUp');
  const sinkDown = Symbol('sinkDown');
  const comp = Symbol('comp');

  return class BH {
    constructor(comparator) {
      this[content] = [];
      this[comp] = comparator || (x => x);
    }

    push(x) {
      this[content].push(x);
      this[bubbleUp](this[content].length - 1);
    }

    remove(x) {
      const len = this[content].length;
      const xScore = this[comp](x);

      for (let i = 0; i < len; i++) {
        if (this[comp](this[content][i]) !== xScore) continue;

        const end = this[content].pop();
        if (i === len - 1) break;

        this[content][i] = end;
        this[bubbleUp](i);
        this[sinkDown](i);
        break;
      }
    }

    [bubbleUp](n) {
      const element = this[content][n];
      const score = this[comp](element);

      while (n > 0) {
        const parentN = Math.floor((n + 1) / 2) - 1;
        const parent = this[content][parentN];

        if (score >= this[comp](parent)) break;

        this[content][parentN] = element;
        this[content][n] = parent;
        n = parentN;
      }
    }

    [sinkDown](n) {
      const len = this[content].length;
      const element = this[content][n];
      const elementScore = this[comp](element);

      while (true) {
        const child2N = (n + 1) * 2;
        const child1N = child2N - 1;
        let child1;
        let child2;
        let swap = null;

        if (child2N < len) {
          child2 = this[content][child2N];
          if (this[comp](child2) < elementScore) {
            swap = child2N;
          }
        }

        if (child1N < len) {
          child1 = this[content][child1N];
          const child1Score = this[comp](child1);
          const child2Score = this[comp](child2);
          if (child1Score < (swap === null ? elementScore : child2Score)) {
            swap = child1N;
          }
        }

        if (swap === null) break;
        this[content][n] = this[content][swap];
        this[content][swap] = element;
        n = swap;
      }
    }

    getRoot() {
      return this[content][0];
    }
  };
})();
