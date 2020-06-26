// How can a given string be reversed using recursion?

const reverseString = (string) => {
    return string ? reverseString(string.substr(1)) + string.charAt(0) : string;
};

console.log(reverseString('Hello world!'));