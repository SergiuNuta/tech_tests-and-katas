// How do you check if a given string is a palindrome?

const checkPalindrome = (string) => {
    const reverseString = string.toLowerCase().split('').reverse().join('');
    return (string.toLowerCase() === reverseString) ? `The string "${string}" is a palindrome.` : `The string "${string}" is not a palindrome.`;
}

console.log(checkPalindrome('Madam'));