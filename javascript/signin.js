$(document).ready(function(){
    
    var db = firebase.database();
    var users = null;
    
    
    db.ref('users').on('value', function(snapshot){
        
        users = snapshot.val();

        
        
    })
    
    $('#signup-form').on('click', function(e){
        console.log(users);
        e.preventDefault();
        let userMail =  $('#email').val().trim();
        let userPassword =  $('#pass').val().trim();
        

        for(let i in users){

            var istifadeciAdi = users[i].name;
            var surName = users[i].surname;
            if(userMail===users[i].email&&userPassword===users[i].password){
                window.localStorage.setItem('keyword', i);
                window.localStorage.setItem('name', istifadeciAdi);
                window.localStorage.setItem('surname',surName);
                window.location.href = 'homenew.html';
                return;
            }
            


        }

    })

$(".btn-x").on('click',function(){
    window.location.href = 'home.html'
})

})

