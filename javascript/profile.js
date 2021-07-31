var username = localStorage.getItem('name');
var surname = localStorage.getItem('surname');
$('.username').append(username+' ' +surname);

$('.r2ina').on('click', function(e){
    e.preventDefault();
    $('.r2ina').css('background-color', '#fff')
    $(this).css('background-color', 'rgb(201, 196, 196)')

  })

  $('.r2ina2').on('click', function(){

    $('.r3 p span').html('Books I disliked')
    $('.newlike').html('') 
    // window.location.href = 'disliked.html'

})
