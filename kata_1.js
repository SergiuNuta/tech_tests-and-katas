// How do you find the missing numbers in a given integer array?

const array = [1, 2, 3, 4, 6, 7, 8, 10, -2];

const findMissingNumbers = () => {
    const arraySize = array.length;
    const sortedArr = array.sort((a, b) => a - b);
    const arr = [];
    let i = 0;
    let firstNumber = sortedArr[0];
    let lastNumber = sortedArr[arraySize - 1];
    while (firstNumber < lastNumber) {
        array[i] === firstNumber ? i += 1 : arr.push(firstNumber);
        firstNumber++;
    }
    return arr;
}

console.log(findMissingNumbers());