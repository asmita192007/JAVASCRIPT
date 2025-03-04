//DOM Manipulation

//1)-Selecting with id
let id=document.getElementById("myId");
console.dir(id);
console.log(id);

//2)-Selecting with class
let Class=document.getElementsByClassName("myclass");
console.dir(Class);
console.log(Class);


//3)-Selecting with tag
let tag=document.getElementsByTagName("p");
console.dir(tag);
console.log(tag);


//QUERY SELECTOR-
//document.querySelector(“#myId / .myClass / tag”)
//returns first element

let first=document.querySelector(".myclass");
console.dir(first);

//document.querySelectorAll(“#myId / .myClass / tag”)
//returns a NodeList

let all=document.querySelectorAll("p");
console.dir(all);
let all1=document.querySelectorAll(".myclass");
console.dir(all1);


//PROPERTIES

/*tagName : returns tag for element nodes

innerText : returns the text content of the element and all its children

innerHTML : returns the plain text or HTML contents in the element

textContent : returns textual content even for hidden elements*/

console.dir(first.tagName);

let div=document.querySelectorAll("div");
console.dir(div);
console.dir(div.innerText);


console.dir(first.innerHTML);
console.dir(first.textContent);



//ATTRIBUTES

//1)-TO GET THE VALUE OF ATTRIBUTE

let div1=document.querySelector(".attribute");
console.log(div1.getAttribute("attribute"));

//2)-TO SET THE VALUE OF AATRIBUTE
//console.log(div.SetAttribute("class","new"));

//3)style
div1.style.backgroundColor="red";
div1.style.fontSize="26px";
div1.innerText="hello";
//div1.style.visibility="hidden";



//NSERT ELEMENTS

//CREATE
let newBtn=document.createElement("button");
newBtn.innerText="insert";
console.log(newBtn.innerText);


      //1)node.append(el)==adds at the end of node(inside)
      let div2=document.querySelector(".append");
      div2.append(newBtn);


      //2)-node.prepend(el)-add at the end of node(inside)
      div2.prepend(newBtn);

      
      //3)node.before(el)==add before the node(outside)
      div2.before(newBtn);


      //4)node.after(el)==add after the node(outside)
      div2.after(newBtn);

      //example
let newHeading=document.createElement("hi");
newHeading.innerHTML="<i>hi,i am asmita</i>";
document.querySelector("body").prepend(newHeading);


//DELETE ELEMENTS
     //1)node.remove()=remove the node
     div2.remove();
      
