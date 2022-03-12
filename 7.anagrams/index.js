// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     const objStringA = buildObjMap(stringA);
//     const objStringB = buildObjMap(stringB);

//     if (Object.keys(objStringA).length !== Object.keys(objStringB).length) {
//         return false;
//     }

//     for (let char in objStringA) {
//         if (objStringA[char] !== objStringB[char]) {
//             return false;
//         }
//     }
//     return true;
// }

// function buildObjMap(str) {
//     const objMap = {};
//     const cleanStr = str.replace(/[^\w]/g, '').toLowerCase();
//     for (let char of cleanStr) {
//         if (objMap[char]) {
//             objMap[char]++;
//         } else {
//             objMap[char] = 1;
//         }
//     }

//     return objMap;
// }

function anagrams(stringA, stringB) {
    return buildCleanStr(stringA) === buildCleanStr(stringB);
}

function buildCleanStr(str){
   return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}
module.exports = anagrams;