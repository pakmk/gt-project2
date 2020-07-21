$(document).ready(function() {
    const inputButton = $("button#name-btn1");
    const nameButton = $("input#name-input");
    const bioButton = $("input#bio-input")
    const worksInput = $("input#works-input");

    inputButton.on("click", function(event) {
      event.preventDefault();
      var userData = {
        name: nameButton.val().trim(),
        bio: bioButton.val().trim(),
        works: worksInput.val().trim()
      };
    var name = userData.name;
    var bio = userData.bio;
    var works = userData.works;

    postName(name,bio,works);
    return userData;
    function postName(name,bio,works) {
      $.post("/api/artist-dash", {
        name: name,
        bio: bio,
        works:works
      })
        .then(function(data) {
          console.log(data)
        //   res.redirect("/")
          window.location.replace("/");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
    }
  
    
    function handleLoginErr(err) {
      $("#alert.msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });

});