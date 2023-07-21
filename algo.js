function insertionSort(arr) {
    const n = arr.length;
  
    for (let i = 1; i < n; i++) {
      const currentElement = arr[i];
      let j = i - 1;
  
      while (j >= 0 && arr[j] > currentElement) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      arr[j + 1] = currentElement;
    }
  
    return arr;
  }
  
  // Example usage:
  const arr = [5, 2, 4, 6, 1, 3];
  const sortedArray = insertionSort(arr);
  console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6]
  