var add = function(){
    var x = 1;
    var f = function(y){
        return x + y;
    };
    return f;
};

var g = add();
console.log(g(2));

/*
Here the EC of add is executed and gone, but js engine keeps the var memory closed, for the inner functions, here its g(). g()'s EC has closed-in x. Eevn if the x's EC is gone. The g() function is a closure.In this case y=2 and x=1; 
Closures, Internally store references to the outer variables
*/

var add2 = function(x){
    var add = function(y){
        return x+y;
    }
    return add;
}
var add3 = add2(3);
var addAgain = add3(4);
console.log(addAgain);


var n;

function f(x){
    n = function(){
        return x;
    }
    x ++;
}

f(5);

console.log(n());

$(function(){
    console.log('arindam'+'#');
})

$('#0').click(function(){
    console.log('button 1 clicked');
})


$(':button').click(function(){
    console.log($(this).attr('id'));
    console.log('arindam clicked button '+$(this).attr('id'))
})


