$(document).ready(function() {
  /*  $("#url").on("change paste keyup", function() { */
  $("#url").change(function() {
    var textbox = $(this);
    if (textbox.val().indexOf("http://") == 0)
      textbox.val(textbox.val().substring(7));
  });
});
