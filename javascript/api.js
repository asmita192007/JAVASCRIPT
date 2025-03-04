//link with api.html

//APPLICATION PROGRAMMING INTERFACES
/*The fetch AOI provides an interface for fetching(sending/receving) resources.
it uses REQUEST and RESPONSE objects.
The fetch() method is used to fetch a resources (data).

let promise=fetch(url,[options])*/

const URL="https://apiv3.iucnredlist.org/api/v3/docs";
const factpara=document.querySelector("#facts");
const btn=document.querySelector("#btn");

const getFacts= async () => {
    console.log("getting data......");
    let response= await fetch(URL);
    console.log(response);


//UNDERSTANDING TERMS
//AJAX-is asynchronous JS and XML
//JSON-is javascript object notation

/*json() method-returns a second promise that resolve with the result
of parsing the reponse body text as JSON.(input is JSON, output is JS objects)*/

let data=await response.json();
factpara.innerText=data[1].text;
};
btn.addEventListener("click",getFacts);


//by promise chaining

function getFacts(){
    fetch(URL)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        factpara.innerText=data[2].text;
    });
}
btn.addEventListener("click",getFacts);



//REQUEST AND RESPONSE
   //HTTP VERBS===hyper text transfer protocol
   //RESPONSE STATUS CODE

   /*HTTP response headers also contain details about the
   responses,such as content type,HTTP status code etc.*/

/*HTTP response status codes
HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:

Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599)*/

/*HTTP request methods
HTTP defines a set of request methods to indicate the purpose of the request and what is expected if the request is successful. Although they can also be nouns, these request methods are sometimes referred to as HTTP verbs. Each request method has its own semantics, but some characteristics are shared across multiple methods, specifically request methods can be safe, idempotent, or cacheable.

GET
The GET method requests a representation of the specified resource.
 Requests using GET should only retrieve data and should not contain a request content.*/



