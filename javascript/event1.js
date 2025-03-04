//link with event1.html


/*The change in the state of an object is known as an Event
Events are fired to notify code of "interesting changes" that may affect code execution.
Mouse events (click, double click etc.)
Keyboard events (keypress, keyup, keydown)
Form events (submit etc.)
Print event & many more*/


/*1)-node.event=()=>{
    //handle here
    }*/

let btn1=document.querySelector("#btn1");
btn1.onclick=()=> {
   console.log("button 1 was clicked");
    let a=25;
    a++;
    console.log(a);
}

let div=document.querySelector("div");
div.onmouseover=() => {
    console.log("you on the div");
}

//EVENT OBJECT
/*It is a special object that has details about the event.
All event handlers have access to the Event Object's properties and methods.

node.event = (e) => {
    //handle here
    }
    e.target, e.type, e.clientX, e.clientY*/

    btn1.onclick=(e)=> {
   console.log(e);
   console.log(e.type);//click
   console.log(e.target);
   console.log(e.clientX);
   console.log(e.clientY);
    }

    div.onmouseover=(evt) => {
        console.log(evt.type);
        console.log(evt.target);
        console.log(evt.clientX);
        console.log(evt.clientY);
    }

//EVENT LISTENER-Note : the callback reference should be same to remove
//node.addEventListener( event, callback )

btn1.addEventListener("click", ()=>{
    console.log("button 1 was clicked by event listener-handler1");
});

// btn1.addEventListener("click", (e)=>{
//     console.log("button 1 was clicked by event listener 2 times-handler2");
//     console.log(e.type);
// });


//node.removeEventListener( event, callback )

//handler 2 was remove by doing some changes..we create a new variable.
const handler2=()=>{
    console.log("button 1 was clicked by event listener 2 times-handler2");
}

btn1.addEventListener("click",handler2);

btn1.removeEventListener("click", handler2);

//handler-3
btn1.addEventListener("click", ()=>{
    console.log("button 1 was clicked by event listener-handler3");
});

//handler-4
btn1.addEventListener("click", ()=>{
    console.log("button 1 was clicked by event listener-handler4");
});





    