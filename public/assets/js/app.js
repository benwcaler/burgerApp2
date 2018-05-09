$(document).ready(function () {
  $(".devourer").on("submit", function (event) {
    event.preventDefault();
    if ($("#dn").val()) {
      var name = $(".devour").data("name");
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
    }
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