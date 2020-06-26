// 3. How do you find duplicate numbers in an array if it contains multiple duplicates?

const array = [2, 6, 13, 5, 9, 11, 16, 11, 11, 3, 17, 16, 8, 5, 5];

const findDuplicates = () => {
    const sortedArr = array.sort((a, b) => a - b);
    let multipleDuplicates = [];

    for (let i = 0; i < sortedArr.length; i++) {
        array[i] - array[i - 2] === 0 ? multipleDuplicates.push(array[i]) : sortedArr;
    }

    return `${multipleDuplicates.length != 0 ? `The multiple duplicates number is  ${multipleDuplicates}` : `No multiple duplicates in ${sortedArr}`}`;
}

console.log(findDuplicates());