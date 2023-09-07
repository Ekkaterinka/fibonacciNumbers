function sumFib() {
    let previous = 3;
    let current = 4;
    let sum = 0;
    let next;

    for (current; current <= 7000000;) {
        next = current + previous;
        previous = current;

        if (current % 2 === 0) {
            sum += current;
        }
        current = next;
    }
    return sum;
}

console.log(sumFib())