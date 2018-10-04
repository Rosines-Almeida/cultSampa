$(document).ready(function(){
  
  $(".btn-register").click(function(event) {
    event.preventDefault();
    var email = $(".partner-email").val();
    var password = $(".partner-password").val();
    var USER_ID = '';

    console.log(email, password);

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(response) {
      console.log(response);
      USER_ID = response.user.uid;
      window.location = "/" + USER_ID;

      //adiciona no banco de dados
      database.ref('users/' + USER_ID).set({
        email,
        password,
      });

    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }); 

  });
  
  $(".btn-login").click(function(event) {
    event.preventDefault();
    var email = $(".partner-email").val();
    var password = $(".partner-password").val();

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(response) {
      window.location = "/" + response.user.uid;
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  });


});