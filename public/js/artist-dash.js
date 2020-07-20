$(document).ready(function() {
    // Getting references to our form and input
    var artistDashboard = $("form#createName");
    const inputButton = $("button#name-btn1");
    const nameButton = $("input#name-input");
    const bioButton = $("input#bio-input")
    const worksInput = $("input#works-btn");
    // When the signup button is clicked, we validate the email and password are not blank
    inputButton.on("click", function(event) {
      event.preventDefault();
      console.log("you clicked")
      var userData = {
        name: nameButton.val().trim(),
        bio: bioButton.val().trim()
      };
    console.log(userData);
      // if (!userData.name || !userData.bio) {
      //   return;
      // }
      return userData;
      // If we have an email and password, run the signUpUser function
      
      // postName(userData.name, userData.bio);
      // nameInput.val("");
      // bioInput.val("");
    });
  postName();
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function postName(name, bio) {
      $.post("/api/artist-dash", {
        name: name,
        bio: bio
      })
        .then(function(data) {
          console.log(data)
        //   res.redirect("/")
          // window.location.replace("/");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
    
  
  });






//   $(function() {
//   $(".create-name").on("submit", function(event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();
// // console.log("CLICK!");
//     var newPost = {
//       name: $("#name-btn").val().trim(),
//       // devoured: $("#devoured").val().trim()
//     };
// console.log(newPost);
//     // Send the POST request.
//     $.ajax("/api/artist-dash", {
//       type: "POST",
//       data: newPost
//     }).then(
//       function() {
//         console.log("added your name");
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });

  
//   $(".create-bio").on("submit", function(event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();
// // console.log("CLICK!");
//     var newPost = {
//       bio: $("#bio-btn").val().trim(),
//       // devoured: $("#devoured").val().trim()
//     };
// console.log("click");
//     // Send the POST request.
//     $.ajax("/api/artist-dash", {
//       type: "POST",
//       data: newPost
//     }).then(
//       function() {
//         console.log("created new search");
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });
// });