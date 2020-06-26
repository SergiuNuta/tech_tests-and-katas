// How do you find all pairs of an integer array whose sum is equal to a given number?

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const pairCheck = (number) => {
    let pairs = [];
    for (let i = 0; i < array.length; i++) {
        if (array.includes(number - array[i])) {
            pairs.push(` ${number - array[i]} + ${array[i]} `);
        }
    }
    return `All pairs of an integer array whose sum is equal to ${number} is : ${pairs}`;


}
console.log(pairCheck(15));