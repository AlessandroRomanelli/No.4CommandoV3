// Problem: When a navigation option is clicked, the "selected" class must be given to that
// object and the corresponding div must be shown below.

// Solution: Use jQuery to assign the selected class when an item is clicked and use the .show
// .hide() functions to show the corresponding div.

//1. Assign the selected class to the #top li item that is clicked.
  //1.1 Call function when the box is clicked
  $("#top li").click(function(event){
    event.preventDefault();
    //1.2 Clear all previous selected classes
    $("#top li").each(function(){
      $(this).removeClass("selected");
    });
    //1.3 Assign the selected class to the selected box
    $(this).addClass("selected");
    //2. Load the corresponding div below
      //2.1 Hide all the divs again
      //2.2 Get the id of the selected div
    selectedDiv = $(this).parent().attr("href")
      //2.3 Hide the
    if (selectedDiv == "#title-text") {
        $(".container").fadeOut(250);
        setInterval(function(){
          $(selectedDiv).fadeIn(1000);
        }, 750)

    }  else if ($("#title-text").attr("style") == "display: block;") {
        $("#title-text").fadeOut(250);
        setInterval(function(){
          $(selectedDiv).fadeIn(250);
        }, 500)
    } else {
      $(".container").hide();
      $(selectedDiv).show()};
});
