$(document).ready(function() {
    // Getting references to our form and inputs
    var loginForm = $("form#login");
    var emailInput = $("input#loginEmail");
    var passwordInput = $("input#loginPassword");
  
    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };
  console.log(userData);
      if (!userData.email || !userData.password) {
        return;
      }
  
      // If we have an email and password we run the loginUser function and clear the form
      loginUser(userData.email, userData.password);
      emailInput.val("");
      passwordInput.val("");
    });
  
    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    // $.ajax("/api/login" + id, {
    //     type: "POST",
    //     data: userData
    //   }).then(
    //     function() {
    //       console.log("EMAIL AND PASSWORD", userData);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    function loginUser(email, password) {
        $.post("/api/login", {
          email: email,
          password: password
        })
          .then(function(data) {
            console.log(data);
            window.location.replace("/");
            // res.redirect("/")
            // If there's an error, handle it by throwing up a bootstrap alert
          })
          .catch(handleLoginErr);
      }
    
      function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
      }
    });
  
  