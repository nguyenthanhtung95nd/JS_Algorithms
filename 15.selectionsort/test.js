const selectionSort = require('./index');

function getArray() {
  return [-1, 5, 3, 0, 2];
}

function getSortedArray() {
  return [-1, 0, 2, 3, 5];
}

describe('Bubble sort', () => {
  test('sorts an array', () => {
    expect(selectionSort(getArray())).toEqual(getSortedArray());
  });
});