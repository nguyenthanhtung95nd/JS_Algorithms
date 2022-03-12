// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    // Create an empty arrays
    arrWords = [];

    // Split the input string by spaces to get an array
    splitedStr = str.split(' ');

    // For each word in array
    for (let char of splitedStr) {
        // Uppper case the first letter of the word
        // Join first letter with rest of the string
        // Put result to into arrWords
        let letter = char[0].toUpperCase() + char.slice(1);
        arrWords.push(letter);
    }

    // Join arrWords into string and result it;
    return arrWords.join(' ');
}

module.exports = capitalize;