$(document).ready(function () {
    $('.lefti').on('click', function () {
      $('.aaa').css('display', 'block')
      $('.aaa').focus();
    })
  
    $('.aaa').on('focus', function () {
      $(this).css('cursor', 'pointer');
  
    })
    $('.aaa').on('blur', function () {
      $('.aaa').css('display', 'none')
    })
  
    $('.logout').on('click', function () {
  
      window.location.href = 'home.html'
      window.localStorage.removeItem('keyword');
      window.localStorage.removeItem('name')
      window.localStorage.removeItem('surname')
    })
  
    $('.profile').on('click', function(e){
      e.preventDefault();
      window.location.href = 'myProfile.html'
    })
    
  })
  
  // $('.signedinp').on('click', function(){
  
  //   window.location.href = 'creatblog.html'
  
  // })
  
  $(document).on('keypress', function(){
  
    $('.bg').prepend('asdasd')
  
  })
  
  
  $(".lefti").on('click',function(e){
    e.preventDefault()
  })
  
  
  $(".sec3leftp2").on('click',function(){
    window.location.href = 'likequotes.html'
  })