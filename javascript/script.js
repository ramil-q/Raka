$('#inp').on('focus', function () {

    $('.inputicon').css('border', '1px solid #198754')
  
  })
  
  $('#inp').on('blur', function () {
  
    $('.inputicon').css('border', '1px solid rgb(211, 209, 209)')
  
  })
  
  
  
  
  
  var btn = document.querySelector("#btn")
  function click() {
    if (btn.classList.contains("far")) {
      btn.classList.remove('far')
      btn.classList.add('fas')
  
    }
  }
  
  $('.btn1').on('click',function(e){
    e.preventDefault()
    window.location.href = 'signin.html'
  })
  
  $('.btn2').on('click',function(e){
    e.preventDefault()
    window.location.href = 'signup.html'
  })
  
  $('.searchbtn').on('click', function(){
  
    window.location.href = 'quotes.html'
  
  })