//link with operator.html

//Arithmetic operator
let a= 5;
let b= 2;
console.log("a=", a, " & b=",b);
console.log("a+b=",a + b);
console.log("a- b=", a - b);
console.log("a* b=", a * b);
console.log("a / b=", a / b);
console.log("a % b=", a % b);
console.log("a** b=", a ** b);  //5 to the power 2(exponentiation)


//unary operator
/*let a= 5;
let b= 2;
console.log("a=", a, " & b=",b);
//post
 a=a--;
console.log("a=", a);
b=b+1;
console.log("b=", b);

//pre
console.log("++a=", ++a);*/

//Assignment operator
/*let a= 5;
let b= 2;
a+=4; //a=a+4
console.log("a=", a);

a-=4; 
console.log("a=", a);

a*=4; 
console.log("a=", a);

a/=4; 
console.log("a=", a);

a%=4; 
console.log("a=", a);

a**=4; 
console.log("a=", a);*/


//comparison operator
/*let a= 5;
let b= 2;
console.log("a==b", a == b);
console.log("a!=b", a != b);
console.log("a>=b", a >= b);
let B= 5;
console.log("a==B", a == B);

let A= 5;//number
let H= "5";//string ->number
console.log("A==H", A == H);

//this is strict type...it also checks datatype and then compare
let string= 5;//number
let d= "5";//string ->number

console.log("s===d", s === d);*/


//logical operator
/*logical AND &&
logical OR ||
logical NOT !*/

let x=5;
let y=6;
let condition1= x>y;//false
let condition2=x===5;//true
console.log("condition1 && condition2",condition1 && condition2);
console.log("condition1 || condition2",condition1 || condition2);
console.log("!(x<y)= ", !(x<y));//true->false


//ternary operator

let age=25;
let result= age >= 18 ? "ADULT" : "NOT ADULT";

console.log(result);

let Age=18;
Age >= 18 ? console.log("ADULT") : console.log("CHILD");