var b = localStorage.getItem('keyword');
console.log(b)
var db = firebase.database()


db.ref('users/' + b + '/quotes').on('value', function (snapshot) {
  $(".quotes").empty()

  var card = Object.values(snapshot.val())
  for (var i of card) {
    console.log(i)
    $(".quotes").append(`<div class="container mt-3 style="90px">
        <div class="row">     
        ${i}
        </div>  
        </div>`)

  }

})