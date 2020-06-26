// 2. How do you find the duplicate number in a given integer array?

const array = [2, 6, 13, 5, 9, 11, 16, 3, 17, 8, 5, 11, 16];

const findDuplicates = () => {
    const sortedArr = array.sort((a, b) => a - b);
    let duplicateNumber = [];

    for (let i = 0; i < sortedArr.length; i++) {
        array[i] - array[i - 1] === 0 ? duplicateNumber.push(array[i]) : sortedArr;
    }

    return `${duplicateNumber.length != 0 ? `The duplicate number is  ${duplicateNumber}` : `No duplicates in ${sortedArr}`}`;
}

console.log(findDuplicates());

