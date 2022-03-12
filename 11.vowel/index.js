// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let count = 0;
    let checker = ['u', 'e', 'o', 'a', 'i'];

    for (let i of str.toLowerCase()) {
        if (checker.includes(i)) {
            count++;
        }
    }
    return count;
}

// Using regex

function vowels_2(str) {
    var matches = str.match(/[ueoai]/gi);
    return matches ? matches.length : 0;
}

module.exports = vowels;