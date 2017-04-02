//Simple stack implementation in JS

const stack = (() => {
    let arr = [],
        index = -1;
    
    const obj = {
        push(val) {return arr[index += 1] = val},
        pop() {
            const val = arr[index];
            arr[index] = undefined;
            if (index >= 0) index -= 1;
            return val;
        },
        isEmpty() {return index < 0}
    }

    return obj;
})()