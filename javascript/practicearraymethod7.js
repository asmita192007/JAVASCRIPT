//link with practice7.html

//QUESTION 1)-We are given array of marks of students. Filter our of the marks of students that scored 90+.

let marks=[97,98,96,95,87,89,8,65,76,65,54,93,92,91];
let toppers=marks.filter((val) => {
    return val > 90;
})
console.log(toppers);


//QUESION 3)- Take a number n as input from user. Create an array of numbers from 1 to n.
        //    Use the reduce method to calculate product of all numbers in the array. 
        //    Use the reduce method to calculate sum of all numbers in the array.


    let n=prompt("enter a number");
    
    let arr=[];
    for (let i=1;i<=n;i++){
        arr[i-1]=i;
    }
    console.log(arr);
//for sum
    let sum=arr.reduce((res,curr) =>{
        return res + curr;
    });
    console.log("sum of array=",sum);
//for product-factorial
    let product=arr.reduce((res,curr) =>{
        return res * curr;
    });
    console.log("product of array=",product);