const lib = require('./index');
const merge = lib.merge;
const mergeSort = lib.mergeSort;

function getArray() {
    return [-1, 5, 3, 0, 2];
}

function getSortedArray() {
    return [-1, 0, 2, 3, 5];
}

describe('Merge sort', () => {
    test('merge function can join together two sorted arrays', () => {
        const left = [1, 10];
        const right = [2, 8, 12];

        expect(merge(left, right)).toEqual([1, 2, 8, 10, 12]);
    });

    test('sorts an array', () => {
        expect(mergeSort(getArray())).toEqual(getSortedArray());
    });
});