export function bubbleSortByTitleAscending(arr: any) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      // Change from j < i - 1 to j < i
      if (arr[j].title.localeCompare(arr[j + 1].title) > 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
