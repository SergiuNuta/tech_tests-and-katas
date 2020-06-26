// An empty string returns zero
// A single number returns the value
// Two numbers, comma delimited, returns the sum
// Two numbers, newline delimited, returns the sum
// Three numbers, delimited either way, returns the sum
// Negative numbers throw an exception
// Numbers greater than 1000 are ignored
// A single char delimiter can be defined on the first line (e.g. //# for a ‘#’ as the delimiter)
// A multi char delimiter can be defined on the first line (e.g. //[###] for ‘###’ as the delimiter)
// Many single or multi-char delimiters can be defined (each wrapped in square brackets)


export class Calculator {
    number = 0;
    constructor(stringOfNumbers) {
        this.number = stringOfNumbers
            .replace(/(\r\n|\n|\r)/gm, '')
            .split(',')
            .map(n => Number(n))

        if (numbers.some(n => Number.isNan(n))) throw new Error('Not a number')
        if (numbers.some(n => n < 0)) throw new Error('Negatives not allowed')
        if (numbers.some(n => n > 1000)) return 0;

        return number.reduce((total, value) => total + value)

    }
}














