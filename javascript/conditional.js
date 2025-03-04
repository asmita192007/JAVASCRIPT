
//link with index.html

// //conditional statements

//if statement
// example-1
let age=25;
if(age>=18){
    console.log("YOU ARE ADULT");
}
if(age<18){
    console.log("YOU ARE NOT ADULT");
}
//example-2
let mode="dark";
let color;

if(mode==="dark"){
    color="black";
}
if(mode==="light"){
    color="yellow";
}
console.log(color);

//if-else statements
//example-1
let marks=60;
if(marks>=35){
    console.log("YOU ARE PASSED");
}
else{
    console.log("YOU ARE FAILED");
}

//example-2
let number=10;
if(number%2==0){
    console.log(number,"NUMBER IS EVEN");
}
else{
    console.log(number,"NUMBER IS ODD");
}

//else-if statements
//example-1

let Age=80;
if(Age<18){
    console.log("YOU ARE CHILD");
}
else if(Age>60){
    console.log("YOU ARE SENIOR CITIZEN");
}
else{
    console.log("YOU ARE YOUTH")
}

//TERNARY OPERATOR

function getFee(isMember) {
    return isMember ? "$2.00" : "$10.00";
  }
  
  console.log(getFee(true));
  // Expected output: "$2.00"
  
  console.log(getFee(false));
  // Expected output: "$10.00"
  
  console.log(getFee(null));
  // Expected output: "$10.00"


  //SWITCH STATEMENTS
  const expr = "Papayas";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

const action = "say_hello";
switch (action) {
  case "say_hello":
    console.log("hello");
    break;
  case "say_hi":
    console.log("hi");
    break;
  default:
    console.log("Empty action received.");
}
  