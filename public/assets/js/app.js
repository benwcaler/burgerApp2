$(document).ready(function () {
  $(".devourer").on("submit", function (event) {
    event.preventDefault();
    var name = $(".devour").data("name");
    console.log(name, $("#dn").val().trim())
    $.ajax("/api/burgers", {
      type: "PUT",
      data: {
        name: name,
        devoured: true,
        devourer: $("#dn").val().trim()
      }
    }).then(function () {
      location.reload();
    });
  });

  $(".form").on("submit", function (event) {
    event.preventDefault();
    $.ajax("/api/burgers", {
      type: "POST",
      data: { name: $("#b").val().trim() }
    }).then(function () {
      location.reload();
    });
  });
});