var db = firebase.database()
var x = 0
var image = "./images/i.jpg"
$("#like").html(x)

var b = window.localStorage.getItem('keyword');



var heart = true
$(document).on('click', '.click a', function (e) {
  e.preventDefault()
  $(".prep").empty()
  if (heart){
    $(this).find($('.111')).removeClass('fal fa-heart')
    var img = $("<img>")
    img.attr('src', './images/heart.svg')
    img.css('background-position', 'center')
    img.css('width', '25px')
    img.css('height', '25px')
    $(this).find($(".111")).html(img)
    $(".quotes").empty()

    var text = $(this).parent().parent().parent().parent().parent()
    db.ref('users/' + b + '/quotes').push(text.html())
heart = false
  } else {
    $(this).find($('.111')).find($(img)).remove()
    var i = $(this).find($('.111')).addClass('fal fa-heart')
    $(this).find($('.111')).html(i)
    db.ref('users/' + b + '/quotes/').on('value', function (snapshot) {
      var d = Object.keys(snapshot.val())
      for(var i of d){
        console.log(i)
        // db.ref('users/' + b + '/quotes/' + i + '/').removeValue()
        
        
      }
    })
    heart = true;
  }

})


