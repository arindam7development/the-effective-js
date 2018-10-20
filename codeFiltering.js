//There is no need to write document.ready


$(function(){
   console.log('Document Loaded'); 
});

$('h1').html('Learn HTML and CSS');

$(function(){
    console.log($('img'));
});

var s = $('img').attr('src');

console.log(s);

$('img').attr({src:function(e){
    console.log(e);
}});

var checkBoxes = $('input[type=checkbox]')

console.log(checkBoxes);

$(function(){
    $('.orange').css('color','red');
});

$(function(){
    $('li').click(function(){
      console.log('arindam'); 
        $(this).css('color','red');
    })
});

$('img').click(function(){
    console.log('arindam');
});


//Jquery filtering 

$(function(){
    $('p').click(function(){
        $(this).filter('.orange').css('color','green');
        $('li').has('span').css('color','red');
        console.log('arindam has changed the color');
    })
})


//Advanced Filtering


$(function(){
    $('.btn').click(function(){
       var orange = $('.orange').map(function(){
           return $(this).html();
       }) 
       //for(int x =0; x<orange.length;x++){
           console.log('arindam'+orange[2]+orange.length);
       //}
        for(i=0; i< orange.length; i++){
            console.log('arindam'+orange[i]+i);
        }
       $('li').slice(2,3).css("background-color","red"); 
    });
})





//The Form selector
