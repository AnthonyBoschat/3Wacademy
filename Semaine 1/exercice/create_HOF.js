const numbers = [1, 2, 3, 4, 5];

// MAP
function myMap(arr, fn) {
    let newArr = [];
  for (let i = 0; i < arr.length; i++) {
      newArr.push(fn(arr[i]));
  }
  return newArr;
}

const double = myMap(numbers, function(num) {
    return num * 2;
});

console.log(double)




// FILTER
function myFilter(arr, fn) {
    let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i])) {
        filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

const numbersPair = myFilter(numbers, function(num) {
    return num % 2 === 0;
});

console.log(numbersPair)




// REDUCE
function myReduce(arr, fn, initialValue) {
    let acc = (initialValue !== undefined) ? initialValue : 0;
  for (let i = 0; i < arr.length; i++) {
      acc = fn(acc, arr[i]);
  }
  return acc;
}

const sum = myReduce(numbers, function(accumulator, currentValue) {
    return accumulator + currentValue
}, 10);

console.log(sum);
