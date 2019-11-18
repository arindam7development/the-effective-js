
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
    return "arindam"
})

arindam(function() {
    return 500
})

function arindam( a) {

    if (typeof a === "function") {
        result = a()
        console.log(result)
    }else {
        console.log(a)
    }
}

