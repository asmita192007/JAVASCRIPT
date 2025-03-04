//QUESTION 1)-
/*Create a H2 heading element with text - “Hello JavaScript”. Append “from Apna College
students” to this text using JS.*/

let h2=document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText=h2.innerText + "from apna college students";



//QUESTION 2)-
/*Create 3 divs with common class name - “box”
.Access them & add some unique text to eacHof them.*/

let divs=document.querySelectorAll((".box"));
console.log(divs[0].innerText);

/*divs[0].innerText="new unique value 1";
divs[1].innerText="new unique value 2";
divs[2].innerText="new unique value 3";*/

let idx=1;
for(let div of divs){
    div.innerText=`new unique value ${idx}`;
    idx++;
}


//QUESTION 3)-
/*Create a new button element. Give it a text “click me, background color of red & text colorof white.
Insert the button as the first element inside the body tag.*/
let newBtn=document.createElement("button");
newBtn.innerText="CLICK ME!";

newBtn.style.color="white";
newBtn.style.backgroundColor="red";
document.querySelector("body").prepend(newBtn);


//QUESTION 4)-
/*Create a <p> tag in html, give it a class & some styling.
Now create a new class in CSS and try to append this class to the <p> element.
Solve this problem using classList.
Did you notice, how you overwrite the class name when you add a new one?*/

let para=document.querySelector("p");
console.log(para.getAttribute("class"));
console.log(para.classList.add("newClass"));





