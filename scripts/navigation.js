// Problem: When a navigation option is clicked, the "selected" class must be given to that
// object and the corresponding div must be shown below.

// Solution: Use jQuery to assign the selected class when an item is clicked and use the .show
// .hide() functions to show the corresponding div.

//0. Divs are hidden by default
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
    $("#title-text").hide();
    $(".container").hide();
      //2.2 Show the selected div
    $selectedDiv = $($(this).parent().attr("href"))
    $selectedDiv.fadeIn(100);
});
