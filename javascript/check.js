$(document).ready(function () {

    var localKey = localStorage.getItem('keyword');

    if (!localKey) {

        window.location.href = 'signin.html'
        return;
    }
    
    var db = firebase.database();
    db.ref('users/' + localKey).once('value', function (snapshot) {

        var info = snapshot.val();

        if (!info) {

            window.location.href = 'signin.html'
            return;
        }

        window.userInfo = info;

    })


    var t = 0;
    $('.sec2ofcreat3 input').on('click', function () {
        db.ref('users/' + localKey + '/clickCount').once('value', function (snapshot) {

            t = snapshot.val();
        })
        t++;
        db.ref('users/' + localKey).update({

            clickCount: t

        })
        var valueofblog = $('.sec2ofcreat2 textarea').val().trim();
        var valueofselect = $('.sec2ofcreat1 select').val();
        console.log(valueofselect);
        console.log(valueofblog);
        db.ref('users/' + localKey + '/blog').once('value', function (snapshot) {
            var x = snapshot.val();
            if (!x) {



            }

            db.ref('users/' + localKey + '/blog').update({

                blog1: {

                    topic1: valueofselect,
                    text: valueofblog
                }

            })

        })


    })


})

