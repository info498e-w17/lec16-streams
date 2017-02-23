"use strict";
//Converts a given string (single word) into pig latin
function pigLatinifyWord(word) {
    //if doesn't start with a letter, return unchanged
    if (/[^a-z]/i.test(word.charAt(0))) {
        return word;
    }
    //if starts with vowels
    if (/[aeiou]/i.test(word.charAt(0))) {
        return word + 'way';
    }
    else {
        var firstVowel = word.search(/[aeiou]/i);
        return word.slice(firstVowel) + word.slice(0, firstVowel) + 'ay';
    }
}
module.exports = pigLatinifyWord;
