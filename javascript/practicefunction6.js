//lin with practice6.html

//QUESTION1)-Create a function using the “function” keyword that takes a String as an argument &
           //returns the number of vowels in the string.

function CountVowels(str){
    let count=0;
    for(const char of str){
        if(char==="a" || 
            char==="A" || 
            char==="e" || 
            char==="E" || 
            char==="i" || 
            char==="I" || 
            char==="o" || 
            char==="O" || 
            char==="u" || 
            char==="U")
            {
            count++;
        }
        console.log(char);
    }
    console.log("the number of vowels is=",count);
}
CountVowels("AsmitaJadhav");


//QUESTION2)-Create an arrow function to perform the same task.     
const vowels=(str) =>{
    let count=0;
    for(const char of str){
        if(char==="a" || 
            char==="A" || 
            char==="e" || 
            char==="E" || 
            char==="i" || 
            char==="I" || 
            char==="o" || 
            char==="O" || 
            char==="u" || 
            char==="U")
            {
            count++;
        }
    }
    console.log("the number of vowels is=",count);

}
vowels("asmitaharsh");


//QUESTION 3)-For a given array of numbers, print the square of each value using the forEach loop.

//FOR EACH LOOP

let num=[2,3,4,5,6];

num.forEach((num) => {
    console.log(num*num);
});

//another wayof FOR EACH LOOP

let nums=[1,2,3,4,5];

let calsquare=(num)=>{
    console.log(num**2);
};
nums.forEach(calsquare);