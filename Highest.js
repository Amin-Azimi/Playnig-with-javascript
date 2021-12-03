//Given a list of integers, create a function that returns the highest product between three of those numbers. 
//For example, given the list [1, 10, 2, 6, 5, 3] the highest product would be 10 * 6 * 5 = 300
//github.com/amin-Azimi/

const points = [41, 80, 1, 5, 25, 10];
let shiftRight = (n, arr) =>
  n <= 0
    ? arr
    : shiftRight (n - 1, [...arr.slice(-1), ...arr.slice(0, -1)]);

const mutliplyReducer = (prev, cur) => prev * cur;

console.log("highest product is:",calculateHighestProduct(points));



function calculateHighestProduct(arr) {
  let len = arr.length;
  let highest = [-Infinity,-Infinity,-Infinity]
  while (len--) {
    highest = setHighest(arr[len],highest);
  }
  console.log("3 highest value :",highest);
  return highest.reduce(mutliplyReducer);
}

function setHighest(newValue,arrHigh)
{
  
  for(let  index=0;index< arrHigh.length;index++)
  {
    if(newValue > arrHigh[index]){
      arrHigh = [...arrHigh.slice(0,index),...shiftRight (1, arrHigh.slice(index))]    
      arrHigh[index] = newValue;
      return arrHigh;
    }
  }
  return arrHigh;
}

