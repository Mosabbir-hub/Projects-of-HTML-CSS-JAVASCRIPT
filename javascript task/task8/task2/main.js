function countOccurrences(numbers, find) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === find) {
            count++;
        }
    }
    return count;
}

// Sample inputs
let numbers = [5, 6, 11, 12, 98, 5];

let find = 5;
console.log(countOccurrences(numbers, find));  // Output: 2

find = 25;
console.log(countOccurrences(numbers, find));  // Output: 0

  