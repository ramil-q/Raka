var a = localStorage.getItem('keyword');
var db = firebase.database()




$('.quote-link').on('click',function (e) {
    e.preventDefault()
    db.ref('users/' + a + '/').on('value',function(snapshot){
        console.log(snapshot.val())
        if(snapshot.val()){
            window.location.href = 'quotes.html'
        }else{
            alert("siz login olmamisiz")
        }
    })
})


$(".blog-link").on('click',function(e){
    e.preventDefault()
    db.ref('users/' + a + '/').on('value',function(snapshot){
        if(snapshot.val()){
            window.location.href = 'blognew.html'
        }else{
            alert("Siz login olmamisiniz")
        }
    })
})


$(".contact-link").on('click',function(e){
    e.preventDefault()
    db.ref('users/' + a + '/').on('value',function(snapshot){
        if(snapshot.val()){
            window.location.href = 'contact.html'
        }else{
            alert("siz login olmamisiz")
        }
    })
})


$(".about-link").on('click',function(e){
    e.preventDefault()
    db.ref('users/' + a + '/').on('value',function(snapshot){
        if(snapshot.val()){
            window.location.href = 'help.html'
        }else{
            alert("siz login olmamisiz")
        }
    })
})


var a = localStorage.getItem('keyword');

if(a){

    window.location.href = 'homenew.html'

}

