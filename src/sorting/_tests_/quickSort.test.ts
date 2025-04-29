import {quickSort} from '../index'; 

describe('quickSort', () => {
  it('Should sort an array of numbers in ascending order', () => {
    const unsortedArray = [5, 3, 8, 4, 2, 7, 1];
    const sortedArray = [1, 2, 3, 4, 5, 7, 8];

    expect(quickSort(unsortedArray)).toEqual(sortedArray);
  });

  it('Should return same array', () => {
    const sortedArray = [1, 2, 3, 4, 5, 6];
    expect(quickSort(sortedArray)).toEqual(sortedArray);
  });

  it('Should return an empty array', () => {
    const emptyArray: number[] = [];
    expect(quickSort(emptyArray)).toEqual([]);
  });

  it('Should handle an array with one element', () => {
    const oneElementArray = [42];
    expect(quickSort(oneElementArray)).toEqual(oneElementArray);
  });

  it('Should return an array with all identical elements', () => {
    const identicalArray = [7, 7, 7, 7];
    expect(quickSort(identicalArray)).toEqual(identicalArray);
  });

  it('Should work with arrays of strings', () => {
    const unsortedStrings = ['banana', 'apple', 'cherry', 'date'];
    const sortedStrings = ['apple', 'banana', 'cherry', 'date'];
    expect(quickSort(unsortedStrings)).toEqual(sortedStrings);
  });

  it('should return same array for mixed types in the array', () => {
    const mixedArray = [3, 'apple', 5, 'banana', 1, 'cherry'];
    expect(quickSort(mixedArray)).toEqual(mixedArray);
  });

});
