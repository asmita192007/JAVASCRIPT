//SYNC IN JAVA

//SYNCHRONOUS
/*Synchronous means the code runs in a particular sequence of instructions given in the program.
Each instruction waits for the previous instruction to complete its execution.*/

console.log("hi");
console.log("i am");
console.log("asmita");

//ASYNCHRONOUS
/*Due to synchronous programming, sometimes imp instructions get
blocked due to some previous instructions, which causes a delay in the UI.
Asynchronous code execution allows to execute next instructions
immediately and doesn't block the flow.*/

/*function hello(){
    console.log("say hi");
}
setTimeout(hello,1000);*/

console.log("one");
console.log("two");

setTimeout(()=>{
    console.log("say hi");
},4000);

console.log("three");
console.log("four");


//CALLBACK

//A callback is a function passed as an argument to another function.

function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallBack){
sumCallBack(a,b);
}
calculator(1,2,sum);
//SUM is a function that passed as an argument in CALCULATOR fuction.

//asynchronous type
const hello=() =>{
    console.log("hello");
};
setTimeout(hello,3000);//hello is also a callback

//CALLBACK HELL
/*Callback Hell : Nested callbacks stacked below one another forming a pyramid structure.
(Pyramid of Doom)
This style of programming becomes difficult to understand & manage.*/

//nesting
//if else
let age=19;
if(age>=18){
    if(age>=60){
    console.log("senior");
}else{
    console.log("middle");
}
}else{
    console.log("child");
}

//for loop

for(let i=0;i<5;i++){
    let str="";
    for(let j=0;j<5;j++){
        str=str+j;
    }
    console.log(i,str);
}

//example
function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
       if(getNextData){
        getNextData();
       }
    },2000);
}

getData(1,()=>{
    console.log("getting data 2.....");
    getData(2,()=>{
        console.log("getting data 3.....");
        getData(3,()=>{
            console.log("getting data 4.....");
            getData(4,()=>{
                console.log("getting data 5.....");
                getData(5);
            });
        });
    });
});


//PROMISES
/*Promise is for “eventual” completion of task. It is an object in JS.
It is a solution to callback hell.

let promise = new Promise( (resolve, reject) => { .... } )
Function with 2 handlers

*resolve & reject are callbacks provided by JS*/

let promise=new Promise((resolve,reject)=>{
    console.log("i am a promise");
     resolve(123);
    //reject("some error occured");
});

//states of promise:-pending,fulfilled 0r resolve,rejected.

/*A JavaScript Promise object can be:

Pending : the result is undefined

Resolved : the result is a value (fulfilled)           resolve( result )

Rejected : the result is an error object                reject( error )

*Promise has state (pending, fulfilled) & some
result (result for resolve & error for reject).*/

function getData1(dataId1,getNextData1){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId1);
            resolve("success");
            //reject("errorrr");
            if(getNextData1){
                getNextData1();
            }
        },5000);
    });
}


/*.then( ) & .catch( )

promise.then( ( res ) => { .... } )

promise.catch( ( err ) ) => { .... } )*/

const getPromise=()=>{
   return new Promise((resolve,reject)=>{
        console.log("i am a promise");
        //resolve("success");
        reject("error");
    });
};


let promise1=getPromise();
promise1.then((res)=>{
    console.log("promise fulfilled",res);
});

promise1.catch((err)=>{
    console.log("rejected",err);
});

//with timeout-example

function asyncFun(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success");
        },4000);
    });
}

function asyncFun1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success");
        },4000);
    });
}

//===CHAINING

/*console.log("fetching data1......");
let p1=asyncFun();
p1.then((res)=>{
    // console.log(res);
    console.log("fetching data2........");
    let p2=asyncFun1();
    p2.then((res)=>{
       // console.log(res);
    });
});*/

console.log("fetching data1.....");
asyncFun().then((res)=>{
    console.log("fetching data2........");
    asyncFun1().then((res)=>{});
});



//ASYNC-AWAIT

/*async function always returns a promise.

async function myFunc( ) { .... }

await pauses the execution of its surrounding async function until the promise is settled.*/

//example1==

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
        resolve(192007);
        },2000); 
    });
}
async function getweatherdata(){
    await api();//1st
    await api();//2nd
}

//example===2

async function getAllData(){
    console.log("getting data 1.....");
    await getData1(1);
    console.log("getting data 2.....");
    await getData1(2);
    console.log("getting data 3.....");
    await getData1(3);
}

//IIFE : Immediately Invoked Function Expression
         /*IIFE is a function that is called immediately as soon as it is defined.*/
                        
//as per above example...make it simple


(async function ( ){
    console.log("getting data 1.....");
    await getData1(1);
    console.log("getting data 2.....");
    await getData1(2);
    console.log("getting data 3.....");
    await getData1(3); 
})();

