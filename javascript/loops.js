//link with loops.html

//loops-
/*1)FOR LOOP-
for (let i = 1; i <= 5; i++) {
console.log("apna college");
}*/

for(let i=1 ; i<=10 ; i++){
    console.log("APNA COLLEGE");
}
console.log("loop has ended");

//to calculate first n numbers

let n=prompt("enter your number");
let sum=0;
for(let i=1 ; i<=n ; i++){
    sum=sum+i;
}
console.log("sum=" , sum);

//infnite loop-never use -it occupies memory.it occur when our stopping condition is always true.

//WHILE LOOP-
/*while (condition) {
// do some work
}*/
let j=1;
while(j <= 5){
    console.log("j=" , j);
    j++;
}


//DO WHILE LOOP-
/*do {
// do some wORK
}
while (condition);*/
let m=1;
do{
    console.log("m=" , m);
    m++;
}
while(m<=5);


//FOR-OF LOOP-
/*for(let val of strVar)
    //do some work
}*/
let str="AsmitaJadhav";
let length=0;
for(let i of str){ //iterator->character
    console.log("i=", i);
    length++;
}
console.log("string length=" , length );


//FOR IN LOOP
/*for(let key in objvar){
//do some work
}*/

let student = {
    fullname :"Asmita Jadhav",
    age:21,
    sgpa:9.2,
    isPass:true,
}
for(let key in student){
    console.log("key=" , key , student[key]);
}

