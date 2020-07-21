$(document).ready(function () {
  // Getting references to our form and input
  var postForm = $("form#post");
  var titleInput = $("input#title");
  var textInput = $("textarea#comment");
  // When the signup button is clicked, we validate the email and password are not blank
  postForm.on("submit", function (event) {
    event.preventDefault();
    console.log("you clicked");
    var userData = {
      title: titleInput.val().trim(),
      body: textInput.val().trim(),
    };
    console.log(userData);
    // artistPost();
    var title = userData.title;
    var body = userData.body;
    console.log(title);
    console.log(body);
    artistPost(title, body);
    return userData;
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function artistPost(title, body) {
    $.post("/api/posts", {
      title: title,
      body: body,
    })
      .then(function (data) {
        // console.log(data)
        //   res.redirect("/")
        //   window.location.replace("/");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }
  function handleLoginErr(err) {
    alert("You Made a Post!");
  }
});
