/*In order to run any piece of js code, function JS has to wrap it with an Execution context. GEC will be creating couple of things by the  JS engine @ Global Object and the element called 'this'. 
When using JS in the browser, the GO will the 'window' object. 'this' will also be pointing to the 'window' object in case of browser.*/

console.log(window);
console.log(this); //Both will be pointing to the 'window' object.

/*During the creation phase of the Execution Context, we have something called Hoisting, it will happen at the creation phase of Execution Context.*/
First Thing: Hoisting of Variables, variables will be stored as undefined. 
Second Thing: Functions will be fully stored in the memory   

greet();
console.log(language); //It will be undefined
var language = "js";
function greet(){
    console.log('Hello');
}

// This was the creation phase of the execution context.

//The execution phase of the execution context.


var x = 'Hi';

logHello();
logHi();
logHiHello();
logBye();

function logHello(){
    console.log('Hello');
}

function logHi(){
    console.log(x);
    var y;
}

function logHiHello(){
    logHi();
    logHello();
}

function logBye(){
    var z = 1;     //During the creation phase var z is hoisted as 'undefined' and the function fNotGlobal fully stored in memory
    function fNotGlobal(){    // During the execution phase, set z=1; and call fNotGlobal(); Calling a new function fNotGlobal()                               //  again, will create a new EC.
        console.log('Bye');
    }
    fNotGlobal();
}

/*In the execution phase, the var x will be defined as 'Hi'. Everytime a new function is called, a new EC is created and executed.*/

/*Execution Stack: will contain all the ECs that are created and Executed. GEC = ('CREATION', 'EXECUTION')*/

//Function Declaration overriding variable declaration

var greet = "Hello";

function greet(){
    return 'Hi';
}
console.log(typeof greet);

/*At the time Hoisting, if the variable name greet is same as that of the function, then the function will be ignored.*/ 

var greet = 'Hi';
var greet = function(){
    console.log('Hello');
}
console.log(typeof greet);

//When we redeclare the var, then the old declaration will be ignored. 
