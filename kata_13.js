// How do you check if two strings are a rotation of each other?

const areRotationEq = (str1, str2) => str1.length === str2.length && str1.repeat(2).indexOf(str2) > -1 ? `The strings "${str1}" and "${str2}" are rotation of each other.` : `The strings "${str1}" and "${str2}" are not rotation of each other.`;

console.log(areRotationEq('hello', 'lohel'));