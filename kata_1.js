const sumLargestNumbers = (data) => {
  const arr = data.sort((a,b) => b - a);
  return arr[0] + arr[1];
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));