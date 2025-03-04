//link with practiceclass.html

//QUESTION 1)-
/*You are creating a website for your college. Create a class User with 2 properties, name &
email. It also has a method called viewData( ) that allows user to view website data.*/

let DATA ="secrete information";

class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("website data=",DATA);
    }
}

let student1=new User("asmita","abc@gmail.com");
let student2=new User("harsh","xyz@gmail.com");

let teachers1=new User("tpo","tpo@gmail.com");

//QUESTION 2)-
/*Create a new class called Admin which inherits from User. Add a new method called
editData to Admin that allows it to edit website data.*/

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA="some new value";
    }
}

let admin1=new Admin("admin","collage@gamil.com");