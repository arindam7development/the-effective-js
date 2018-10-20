$(function({
    
    $('ul').attr('title','This is the list :)');
    
    $('.btn').click(function(){
     var eleKids = $('p').children(); 
     console.log(eleKids);
    });
    
    $('span').click(function(){
    var dad = $(this).parent().parent().Attr('title');
    console.log(dad);
    });
    
}))


$(function(){
    $('li').click(function(){
        $(this).next().css('color','red');
        $(this).prev().css('color','blue');
        $(this).nextAll().text('arindam');
    })
})
