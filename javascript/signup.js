$(document).ready(function () {

    var db = firebase.database();
    var newusers = db.ref('users').push();

    $('#signup-form').on('submit', function (e) {
        e.preventDefault();

        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var password = $('#pass').val().trim();
        var surname = $('#surname').val().trim();

        newusers.set({

            name,
            email,
            password,
            surname

        }).then(result =>{

            window.location.href = 'signin.html'

        
     
        })

    })

    })


