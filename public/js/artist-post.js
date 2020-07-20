const Posts = require("../../models/Posts");

$(document).ready(function() {
    // Getting references to our form and input
    var postForm = $("form#post");
    var titleInput = $("input#title");
    var textInput = $("textarea#comment");
  
    // When the signup button is clicked, we validate the email and password are not blank
    postForm.on("submit", function(event) {
      event.preventDefault();
      console.log("you clicked")
      var userData = {
        title: titleInput.val().trim(),
        body: textInput.val().trim()
      };
      console.log(userData)    
      // if (!userData.email || !userData.password) {
      //   return;
      // }
      // If we have an email and password, run the signUpUser function
      // signUpUser(userData.email, userData.password);
      // emailInput.val("");
      // passwordInput.val("");
      // $.ajax("/api/signup", {
      //   type: "POST",
      //   data: userData
      // }).then(
      //   function(userData) {
      //     console.log("EMAIL AND PASSWORD", userData);
      //     // Reload the page to get the updated list
      //     // location.reload();
      //   }
      // );
    });
   
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function post(title, body) {
      $.post("/api/posts", {
        title: title,
        body: body
      })
        .then(function(data) {
          console.log(data)
        //   res.redirect("/")
        //   window.location.replace("/");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
    
  
  });