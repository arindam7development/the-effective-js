//Object-Equality

//primitives

var x =1;
var y=1;
//Will retrun true, here JS will check the values for the primitives
console.log(x==y);
//Objects
var myPhone = {
    make: "OnePlus",
    model: "6"
}
var myPhone2 = {
    make: "OnePlus",
    model: "6"
}
//Objects can only be equal if they will point to the same reference in the memory
console.log(myPhone2==myPhone);
var myPhone3 = myPhone; //Here JS will not create a new meory space for the new object, JS will be using the same.
console.log(myPhone3==myPhone);

//Strings

var namePrimitive1 = "Arindam";
var namePrimitive2 = "Arindam";
//Here JS will call the constructor, String is a global object here.
var objectName1 = new String('Arindam');
var objectName2 = new String('Arindam');

//The check for the type

console.log(typeof namePrimitive1);
console.log(typeof objectName1);

//The check for the equality

console.log(namePrimitive1 == namePrimitive2);
console.log(objectName1 == objectName2);

// Its always recommnded that to store the Strings as a primitive one not as the objects. In-order to check the equality for the objects, we have to loop through the properties //one by one.
