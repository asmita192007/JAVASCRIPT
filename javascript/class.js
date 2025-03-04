//Prototypes in JS


/*A javaScript object is an entity having state and behavior (properties and method).
JS objects have a special property called prototype.
We can set prototype using _ _ proto _ _
*If object & prototype have same method,
object’s method will be used.*/


const student={
    name:"asmita",
    marks:92,
    printMarks:function(){
        console.log("marks=",this.marks);//this=student.marks
    },
};

let employee={
    caltax(){
        console.log("tax rate is 10%");
    },
};

const karan={
    salary:5000,
    caltax(){
        console.log("tax rate is 20%");
    },
};
//when both karan and employee having same function then it will print its wn function.
karan.__proto__=employee;


//CLASSES IN JAVA
/*Class is a program-code template for creating objects.
Those objects will have some state (variables) & some behaviour (functions) inside it.

class MyClass {
constructor( ) { ... }
myMethod( ) { ... }
}
let myObj = new MyClass( ) ; */

class Toyotacar{
    constructor(brand,milage) {
        console.log("creating in objects");
        this.brand=brand;
        this.milage=milage;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }

}

let fortuner=new Toyotacar("fortuner",10);
console.log(fortuner);


//CONSTRUCTOR

/*Constructor( ) method is :
1)automatically invoked by new
2)initializes object

class MyClass {

constructor( ) { ... }

myMethod( ) { ... }*/


//INHERITANCE IN JS
/*inheritance is passing down properties & methods from parent class to child class.

class Parent {
}
class Child extends Parent {
}

*If Child & Parent have same method, child’s
method will be used. [Method Overriding]*/

class parent{
    hello(){
        console.log("hello");
    }
}
class child extends parent{

}
let obj=new child();

//example-2

class person{
    constructor(){
        console.log("enter parent constructor");
        this.species="homo sapiens";
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}
class engineer extends person{
    constructor(branch){
        console.log("enter child constructor");
        super();//to invoked parent clas constructor
        this.branch=branch;
        console.log("exit child constructor");
    }
    work(){
        super.eat();
        console.log("solve problems and think critical");
    }
}
let asmita=new engineer("ENTC engineer");



//SUPER KEYWORD-
/*The super keyword is used to call the constructor of its parent class to access the parent's
properties and methods.

super( args ) // calls Parent‘s construCtor
super.parentMethod( args )*/