// const sumLargestNumbers = (data) => {
//   const arr = data.sort((a,b) => b - a);
//   return arr[0] + arr[1];
// }

// console.log(sumLargestNumbers([1, 10]));
// console.log(sumLargestNumbers([1, 2, 3]));
// console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

// const sumLargestNumbers = function(data) {  
//   //array to store largest numbers
//   const largestNumbers = [];
//   //add first number of data
//   largestNumbers.push(data[0]);
//   //if second data is bigger it should be first in array
//   data[1] > data [0] ? largestNumbers.unshift(data[1]): largestNumbers.push(data[1]);
//   //if data has more than two numbers
//   // if (data.length > 2) {
//   //   //check each number
//   //   for (let i = 2; i < data.length; i++){
//   //     //if number is bigger than data[0]
//   //     if (data[i] > largestNumbers [0]){
//   //       //put new number first and pop off the smallest
//   //       largestNumbers.unshift(data[i]);
//   //       largestNumbers.pop()
//   //     } else if (data[i] > largestNumbers[1]){
//   //       //pop off the smallest then add new to end
//   //       largestNumbers.pop()
//   //       largestNumbers.push(data[i]);
//   //     }
//   //   }
//   // }
//   return largestNumbers[0] + largestNumbers[1]
// };


const sumLargestNumbers = function(data) {
  const largestNums = [];  
  for(let i = 0; i < data.length; i++){
    // populate array
    largestNums.push(data[i]);
    // compare first two numbers - unshift larger number to beginning of largestNums   
    largestNums[1] > largestNums[0] ? largestNums.unshift(data[1]) : largestNums.push(data[1]);
    // compare arrays larger than two nums - unshift largest number to beginning of largestNums    
    data[i] > largestNums[0] ? largestNums.unshift(data[i]) : largestNums.pop();             
  };
  return largestNums[0] + largestNums[1];
}


console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));