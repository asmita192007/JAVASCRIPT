/*que-1)GET USER TO INPUT A NUMBER USING prompt("ENTER A NUMBER:").
CHECK IF THE NUMBER IS A MULTIPLEOF 5 OR NOT.*/

let NUMBER=prompt("ENTER A NUMBER");
if(NUMBER % 5 == 0){
    console.log("NUMBER IS MULTIPLE OF 5")
}
else{
    console.log("NUMER IS NOT MULTIPLE OF 5")
}

/*Qs2. Write a code which can give grades to students according to their scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F */

let marks=prompt("ENTER YOU MARKS");
    if(100 >= marks && marks >= 80){
    console.log("GRADE IS 'A' ");
    }
    else if(79 >= marks && marks >= 70){
    console.log("GRADE IS 'B' ");
    }
    else if(69 >= marks  && marks >= 60){
    console.log("GRADE IS 'C' ");
    }
    else if(59 >= marks && marks >= 50){
    console.log("GRADE IS 'D' ");
    }
    else{
        console.log("GRADE IS 'F' ");  
    }
