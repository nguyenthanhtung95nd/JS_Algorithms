// Create 'results' array
// While there are still element in both arrays
    // If the first element the left half is less than first in right half
        // 'shift' the element from left into a 'result' array
    // else
        // 'shift' the element from right into a 'result' array
// Take everything from the array that still has stuff in it and put it in results

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const results = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    return [...results, ...left, ...right];
}

module.exports = {
    merge,
    mergeSort
};