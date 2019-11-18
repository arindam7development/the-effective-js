
b= function(){
    return 10
}

arindam(9)

arindam(b())

arindam(function(){
    return 5
}())

//If i am trying to send a function

arindam(function() {
    console.log("arindam")
})

function arindam( a) {

    if (typeof a === "function") {
        a()
    }else {
        console.log(a)
    }
}

