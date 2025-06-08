// find the second largest number


function secondLargest(numbers) {
  return numbers.sort((a,b) => b - a)[1]
}

console.log(secondLargest([10,40,30,20,50]));
