// How do you check if a string contains only digits?

const digitsOnlyCheck = (string) => parseInt(string).toString() === string ? `The string "${string}" contains only digits!` : `The string "${string}" do not contains only digits!`

console.log(digitsOnlyCheck('12345'));

