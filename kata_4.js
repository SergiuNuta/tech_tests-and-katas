// 4. How do you remove duplicates from an array in place?

const array = [0, 1, 2, 0, 0, 3];

const removeDuplicates = () => Array.from(new Set(array));

console.log(removeDuplicates());


