// How do you find the largest and smallest number in an unsorted integer array?

const array = [5, 34, 2, 33, 54, 323, 12, 347, 43, 63, 23];

const largestAndSmallestNumber = () => {
    let smallest = Math.min(...array);
    let largest = Math.max(...array);

    return `From an unsorted array, largest number is ${largest} and smallest number is ${smallest}`
}

console.log(largestAndSmallestNumber());
