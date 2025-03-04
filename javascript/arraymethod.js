//link with arraymethod.html

//SOME ARRAY METHODS

//1)-MAP METHOD
/*Creates a new array with the results of some operation. The value its callback returns are
used to form new array

arr.map( callbackFnx( value, index, array ) )
*/

let nums=[23,34,45];
let newArr=nums.map((val) => {
    return val**2;
});
console.log(newArr); //it is for new array.


//2)-FILTER METHOD
//Creates a new array of elements that give true for a condition/filter.

let arr=[1,2,3,4,5];
let evenArr=arr.filter((val)=>{
return val % 2===0;
});
console.log(evenArr);


//3)-REDUCE METHOD
//Performs some operations & reduces the array to a single value. It returns
//that single value.

let array=[1,2,3,4,5];

const output=array.reduce((res,curr) => {
    return res + curr;
});
console.log(output);


//return a largestamong the array

let arr1=[12,23,34,45,56,67,78,89];

const out=arr1.reduce((prev,curr) =>{
 return prev > curr ? prev :curr;
});
console.log(out);

/*const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10 */
