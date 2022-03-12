// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    // From 0 to n (iterate though rows)
    for (let row = 0; row < n; row++) {
        // Create an empty string, "stair"
        let stair = '';
        // From 0 to n (iterate though columns)
        for (let column = 0; column < n; column++) {
            // IF the current column is equal to or less than the current row, add a '#' to stair
            // ELSE add space to 'stair'
            if (column <= row) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }
        console.log(stair);
    }
}

// Using recursion
function steps_recursion(n, row = 0, stair = '') {
    // IF (row === n) the we have hit the end of our problem
    if (row === n) {
        return;
    }

    // IF the 'stair' string has a length === n then we are at then end of a row
    if (stair.length === n) {
        console.log(stair);
        return steps_recursion(n, row + 1)
    }

    // IF the length of 'stair' string less than or equal to the row number we are woking on, we add '#'into stair, otherwise add a space
    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }

    steps_recursion(n, row, stair)
}

module.exports = steps;