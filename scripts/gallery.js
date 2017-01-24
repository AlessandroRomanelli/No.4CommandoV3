// Problem: Images in the slideshow do not display in full screen
// Solution: Create an overlay that displays the picture in full resolution and it's dismissed
// whenever it's clicked outside the displayed Image

// Create an overlay
var $overlay = $('<div id="overlay"></div>');
// Create an Image
var $image = $("<img>");
var $caption = $("<p>(Click anywhere to return to the slideshow)</p>");

// Append the image to the overlay
$overlay.append($image);
$overlay.append($caption);
// Append the overlay to the body
$("body").append($overlay);

$("#gallery img").click(function(){
  var imageLocation = $(this).attr("src");
  $image.attr("src", imageLocation);
  $overlay.show();
});

$overlay.click(function(){
  $overlay.hide();
})
