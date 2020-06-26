// How do you print duplicate characters from a string?

const string = "this is a random string";

const printDuplicateChar = () => {
    const sortedStr = string.split('').sort();
    let duplicatesChar = [];
    for (let i = 0; i < sortedStr.length; i++)
        if (sortedStr[i] === sortedStr[i + 1] && sortedStr[i] != sortedStr[i + 2]) duplicatesChar.push(sortedStr[i]);
    return `From string "${string}" the duplicate characters is : ${duplicatesChar}`;
}

console.log(printDuplicateChar());