
  $(function() {
  $(".create-name").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
// console.log("CLICK!");
    var newPost = {
      name: $("#name-btn").val().trim(),
      // devoured: $("#devoured").val().trim()
    };
console.log(newPost);
    // Send the POST request.
    $.ajax("/api/artist-dash", {
      type: "POST",
      data: newPost
    }).then(
      function() {
        console.log("added your name");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  
  $(".create-bio").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
// console.log("CLICK!");
    var newPost = {
      bio: $("#bio-btn").val().trim(),
      // devoured: $("#devoured").val().trim()
    };
console.log("click");
    // Send the POST request.
    $.ajax("/api/artist-dash", {
      type: "POST",
      data: newPost
    }).then(
      function() {
        console.log("created new search");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});