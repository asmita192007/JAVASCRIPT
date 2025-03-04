//lin with function.html

//FUNCTION:-block of code that performs a specific task,
        //can be called whenever needed.
        //it avoid redundancy.

console.log("hello");
"abc".toUpperCase();
[1,2,3,4].push(5);

//FUNCTION DEFINITION
/*1) function functionName(){
      //do some work
      }
  */


  function myFunction(){
    console.log("welcome to apna college");
    console.log("we are learning JS");
  }  
  
  /*2) function functionName(para1,para2....){
    // do some wwork
    }*/

  function parameter(msg){
    //parameter->input:-inside the function definition is called parameter.
    console.log(msg);
  }

  //FUNCTTION CALL
     // functionName()

  myFunction();
  parameter("i love JS");//argument:-inside function call is known as arguments.

  //example-2)
  function sum(x,y,z){
    let add=x+y+z;
    console.log(add);
  }
  sum(2,3,4);

  //example-3)
  function add(m,n){
    a=m+n;
    return a;
    console.log("we cannat write something after return");
  }
  let value=add(3,4);
  console.log(value);



//ARROW FUNCTION
const mul=(a,b)=>{
console.log(a*b);       //return a*b;
}
mul(3,4);

const print=()=>{
  console.log("hellooo");
};



//FOR EACH LOOP IN ARRAY
   /*Arr.forEach( callBackFunction)
         CallbackFunction:here,it is a function to execute
            for each element in the array.
            *A CALLBACK IS A FUNCTION PASSED AS AN ARGUMENTS TO ANOTHER FUNCTIONS* */


     let arr=[1,2,3,4,5];
     arr.forEach(function printval(val){
      console.log(val);
     });
     

     let arr1=["pune","mumbai","delhi"];
     arr1.forEach((val,idx,arr1) => {
      console.log(val.toUpperCase(),idx,arr1);
     });
     //we can use 3 quantities like value,index and array itself inside the FOR EACH LOOP.