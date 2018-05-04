$(document).ready(function () {
  $(".devour").on("click", function (event) {
    var name = $(this).data("name");
    $.ajax("/api/burgers", {
      type: "PUT",
      data: {
        name: name,
        devoured: true
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