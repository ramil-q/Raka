var images = ['./images/animateimage1.png',
    './images/animateimage2.png',
    './images/animateimage3.png'
]
var localKey = localStorage.getItem('keyword');




var blog = document.querySelector('.sec2blog');
var i = 1;
setInterval(function () {
    blog.style.backgroundImage  = "url(" + images[i] + ")"
    blog.style.backgroundPosition="center" 
    blog.style.backgroundImage = 'linear-gradient('
        + 255 + ', ' + 0 + ', ' + 0 + ','+0.5+'), rgba('+0+','+0+','+0+','+0.5+')';
    i++;
    if (i == images.length) {
        i = 0;
    }
}, 2000)

var db = firebase.database();

$(".sec2ofcreat").hide()
$(".signedinp").on('click', function (e) {
    e.preventDefault()
    $(".sec2ofcreat").show()
})

function Travel() {
    var div = $(`<div class="card card1" style="width: 18rem">
    <img src="${img1}" width="698px" height="392px" class="card-img-top" alt="...">
    <div class="card-body">
 
        <h4>${key[0]}</h4>
        <p class="card-text">${key[2]}</p>
        <a href="#" class="btn btn-success btnblog">Read More</a>
    </div>
</div>`)
    $(".div").prepend(div)
}
function success() {
    var div = $(`<div class="card card1" style="width: 18rem">
            <img src="${img3}" width="698px" height="392px" class="card-img-top" alt="...">
            <div class="card-body">

                <h4>${key[0]}</h4>
                <p class="card-text">${key[2]}</p>
                <a href="#" class="btn btn-success btnblog">Read More</a>
            </div>
        </div>`)
    $(".div").prepend(div)
}

function love() {
    var div = $(`<div class="card card1" style="width: 18rem">
    <img src="${img2}" width="698px" height="392px" class="card-img-top" alt="...">
    <div class="card-body">
 
        <h4>${key[0]}</h4>
        <p class="card-text">${key[2]}</p>
        <a href="#" class="btn btn-success btnblog">Read More</a>
    </div>
</div>`)
    $(".div").prepend(div)
}

var img1 = './images/Travel.jpg'
var img2 = './images/love.jpg'
var img3 = './images/success.jpg'
var keys = null
var key = null
db.ref('blogs/').on('value', function (snapshot) {
    keys = Object.keys(snapshot.val())
    
    for (var i in keys) {

        db.ref('blogs/' + keys[i]).on('value', function (snapshot) {
            key = Object.values(snapshot.val())
            console.log(key)
            console.log(key[1])
            if (key[1] === 'Travel') {
                Travel()
            } else if (key[1] === 'Love') {
                love()
            } else if (key[1] === 'Success') {
                success()
            }
        })
    }
})

$("#btn").on('click', function () {
    $('.div').empty()
    var select = $(".sec2ofcreat1 select").val().trim()
    var text = $(".sec2ofcreat2 textarea").val().trim()
    var head = $("#basliq").val().trim()
    db.ref('blogs/').push({
        text: text,
        select: select,
        head:head
    })
    $(".sec2ofcreat1 select").val("")
    $(".sec2ofcreat2 textarea").val("")
    $("#basliq").val("")
})