//link with string.html

let str1="asmita";
let str2='harsh';
 
//for length:-str.length

console.log("length of string =", str1.length);

//for particular character which is situated on index
console.log("chararcter at 0 position=" , str1[0]);//a

//Template Literals in JS:--
/*A way to have embedded expressions in strings

`this is a template literal`

String Interpolation
To create strings by doing substitution of placeholders
string text ${expression} string text` */

let specialstring=`this is a template literal`;
console.log("template string=" , specialstring);
console.log("type of special string=",typeof specialstring);

let obj={
    item:"pen",
    price:10,
};
// console.log("THE COST OF", obj.item ,"IS", obj.price, "rupees");
let output=`the cost of ${obj.item} is ${obj.price} rupees`;
console.log("template litearl=" , output);


//any expression inside the string
let data=`my age is ${15+5+1}`;
console.log("expr in the string=",data);
//in the template literals first the expression is converted into the the string and then it print.


//for next line
console.log("next line=","Asmita \n harsh");

//for one tab space
let str="Asmita \t harsh";
console.log("length with tab spacr=",str.length);//14 includind 2 space and \t


//string methods
//1)-UPPERCASE
let str11="asmitajadhav";
console.log("uppercase=",str11.toUpperCase());

//2)-LOWERCASE
let str19="HARSHKESARKAR";
console.log("lowercase=",str19.toLowerCase());

//3)-TRIM-remove only starting and ending whitespaces.
let str123="     asmita jadhav    ";
console.log("trim=",str123.trim());


//4)-SLICE
let string1="sarikajadhav"
string1=string1.slice(2,5);
console.log("slice=",string1);

//5)-CONCAT
let String2="sarika"
let string2="amrut";
string3=String2.concat(string2);
//string3=String2 + string2;
console.log("concatination=",string3);

//6)-REPLACE
let str111="blue";
console.log("replacing=",str111.replace("b" , "c"));

//7)-charAt
let STR="apnacollege";
console.log("charat=",STR.charAt(3));

