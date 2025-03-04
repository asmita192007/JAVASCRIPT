//Question-1)PRINT LL EVEN NUMBER FROM 0 TO 100


for(let num=0;num<=100;num++){
    if(num%2==0){
        console.log("num" , num);   
    }
}


//QUE2)-CREATE A GAME WHERE YOU START WITH ANY RANDOM GAME NUMBER.ASK THE USER TO KEEP
//GUSSING THE GAME NUMBER UMTIL YHE USER ETERS CORRECT VALUE.

let gamenumber=25;
let usernumber=prompt("enter you number");


while(usernumber != gamenumber){
     usernumber=prompt("you enter wromg number please try again!");
} 
console.log("CONGRATULATIONS,YOU ENTER THE RIGHT GAMENUMBER");
