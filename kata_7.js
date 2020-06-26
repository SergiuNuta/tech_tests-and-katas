// How do you reverse the words in a sentence?

const sentence = 'The man fell off a cliff';

const reverseWords = () => sentence.split(' ').reverse().join(' ');

console.log(reverseWords());