//link with arrays,html


let marks=[23,34,45,56,67,78,89,90];
console.log(marks);
console.log(marks.length);//property

console.log(marks[1]);//index

//change any value
marks[2]=54;
console.log(marks);

//looping over an array
//FOR  LOOP
let fruits=["apple","orange","mango","grapes","watermelon","papaya"];
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

//FOR OF LOOP
let elements=[1,2,3,4,5,6,7,8,9];
for(let el of elements){
    console.log(el);
}

//FOR IN LOOP
let cities=["delhi","mumbai","pune","jaypur"];
for(let city of cities){
    console.log(city.toUpperCase());
}

//methods in array
//1)PUSH()-ADD TO END
let fooditems=["potatos","apple","litchie","tomatos"];
fooditems.push("banana");
console.log(fooditems);


//2)POP()-DELETE FROM END AND RETURN
fooditems.pop("tomatos");
console.log(fooditems);


//3)TOSTRING()-CONVERTS ARRAY TO STRING
console.log(fooditems.toString());

//4)concat()-
let marvels=["thor","spidermen","ironman"];
let dc=["superman","batman"];
let heros=marvels.concat(dc);
console.log(heros);

//5)unshift()-ADD FROM STARTING AND IT IS EQUIVALENT TO PUSH.
marvels.unshift("antman");
console.log(marvels);

//6)shift-deleted from start..equivalent to pop
let method=marvels.shift("antman");
console.log(marvels);
console.log("deleted", method);

//7)SLICE()-RETURN A PIECE OFF THE ARRAY
let Fruits=["apple","orange","mango","grapes","watermelon","papaya"];
console.log(Fruits);
console.log(Fruits.slice(1,4));

//8)SPLICE-CHANGE ORIGINAL ARRAY
let num=[1,2,3,4,5,6,7];
num.splice(2,2,101,102);
console.log(num);
       
      //only add elements
      let Num=[1,2,3,4,5,6,7];
      Num.splice(2,0,101);
      console.log(Num);
          
             //delete elements
             let Num1=[1,2,3,4,5,6,7];
             Num1.splice(3,1);
             console.log(Num1);

                   //replace element
                   let Num11=[1,2,3,4,5,6,7];
                    Num11.splice(3,1,101);
                    console.log(Num11);
