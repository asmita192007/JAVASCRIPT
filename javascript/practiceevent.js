//link eith practiceevent.html

//QUESTION 1)
/*Create a toggle button that changes the screen to dark-mode when clicked & light-mode
when clicked again.*/

let modebutton=document.querySelector("#mode");
let body=document.querySelector("body");

let currmode="light";

modebutton.addEventListener("click", () =>{
    // console.log("you are trying to change mode");
    if(currmode==="light"){
      currmode="dark";  
      //body.style.backgroundColor="grey";
      body.classList.add("dark");
      body.classList.remove("light");
    }
    else{
        currmode="light";
        //body.style.backgroundColor="pink";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currmode);
});
