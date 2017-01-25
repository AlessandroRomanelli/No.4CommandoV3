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

//Problem: The page is not very explainatory
//Solution: Open an overlay when a weapon is clicked to show accurate data and bigger image

//Create an overlay
var $arsenalOverlay = $("<div id='arsenalOverlay'></div>");
var $wepName = $("<h3></h3>");
var $wepImg = $("<img></img>");
var $wepText = $("<p></p>");
  //Append the weapon's name to the top
  $arsenalOverlay.append($wepName);
  //Append the weapon's image in the middle
  $arsenalOverlay.append($wepImg);
  //Append the weapon's description at the bottom
  $arsenalOverlay.append($wepText);
//Append the overlay to the body
$("body").append($arsenalOverlay);
//When an image is clicked the corresponding overlay should open with the correct data
  //Target the image clicked
  $(".column .header-img").click(function(){
  //Retrieve the name of the weapon
  var wepName = $(this).prev().text();
  //Return the title to the overlay
  $wepName.text(wepName);
  //Retrieve the id of the image
  var imageID = $(this).attr("id")
  //Embbed this id into the image src likeso: "src="img/arsenal/"+imageID+".jpg""
  var wepImageLocation = "img/arsenal/"+imageID+".jpg"
  //Return the image to the overlay
  $wepImg.attr("src", wepImageLocation);
  //Retrieve the p from the image
  var wepText = $(this).children().text();
  //Return the description to the overlay
  $wepText.text(wepText);
//Display overlay
$arsenalOverlay.show();
});

$arsenalOverlay.click(function(){
  $arsenalOverlay.hide();
})
