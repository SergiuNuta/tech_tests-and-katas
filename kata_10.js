// How do you print the first non-repeated character from a string?

const printFirstNonRepeat = (text) => {
    const splitedString = text.split("")
    for (const character of splitedString) {
        if (text.indexOf(character) === text.lastIndexOf(character)) {
            return `The first non-repeated character from "${text}" is : ${character}`;
        }
    }
}

console.log(printFirstNonRepeat('aleluia'));