//add fade attribute
window.onload = function(){
  document.getElementById("home").style.opacity = 1;
}



//trailer autoplay
$(document).ready(function () {
  var url = $("#trailerVideo").attr('src');
  $("#trailerModal").on('hide.bs.modal', function () {
    $("#trailerVideo").attr('src', '');
  });
  $("#trailerModal").on('show.bs.modal', function () {
    $("#trailerVideo").attr('src', url);
  });
});