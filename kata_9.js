// How do you check if two strings are anagrams of each other?

const checkAnagrams = (str1, str2) => {
    const x = str1.toLowerCase().split("").sort().join("");
    const y = str2.toLowerCase().split("").sort().join("");
    if (typeof x == "string" && typeof y == "string") {
        return (x === y) ? `${str1} and ${str2} are anagrams!` : `${str1} and ${str2} are not anagrams.`;
    }
    else {
        return "Not a string!";
    }
}

console.log(checkAnagrams('Silent', 'Listen'));
