export default function quickSort<T>(arr: T[]): T[] {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[arr.length - 1];
    
    const left = arr.filter(item => item < pivot);
    const right = arr.filter(item => item > pivot);
    const middle = arr.filter(item => item === pivot);
    
    return [...quickSort(left), ...middle, ...quickSort(right)];
  }
  