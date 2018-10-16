//generic object constructor
var myPhone = new Object();
//same is if wrote
//var myPhone = {};

myPhone.make = "OnePlus";
myPhone.model = "6";
myPhone.warranty = 12;
myPhone.colour = "mirror black";
//console.log(myPhone);

//Constructors
function phone(make, model, warranty, colour){
    this.make = make;
    this.model = model;
    this.warranty = warranty;
    this.colour = colour;
}


//let's build another phone
var myOnePlusPhone = new phone("OnePlus", "6", 12, "mirror black");
//console.log(myOtherPhone);

//Don't add the method in the constructor

// Use Prototypes to add methods and properties in the object
//Even the property or the method is not there in the object, additional methods or properties can be added to the prototype

phone.prototype.ring = function(){
    console.log("beep beep");
};

phone.prototype.extendWarranty = function(x)
{
   this.warranty += x;    
};

phone.prototype.condition = "new";

//This will print only the properties which are there in the object, the methods and proeprties that are there in the prototype will come only, when it is needed by the object

console.log('myOnePlusPhone');
console.log(myOnePlusPhone);

myOnePlusPhone.ring();

console.log(myOnePlusPhone.warranty);

myOnePlusPhone.extendWarranty(12);

console.log(myOnePlusPhone.warranty);

//Here the 'condition' property is not there in the object, when we do myOnePlusPhone.condition, it will first check the object, it won't get that 
// then it will look for the proptotype, then it will get it.
// This is called as Inheritance in JS, objects inherites from the prototypes
console.log(myOnePlusPhone.condition);




