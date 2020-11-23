//if any checkbox within the '.todo-checkboxes' class is clicked
$('.todo-checkboxes > input[type="checkbox"]').click(function(){

    var numberChecked = 0;
    var numberOfCheckboxes = 0;
    //looping through all of the checkboxes in the 'todo-checkboxes' class on the dom
    $(".todo-checkboxes").children("input[type='checkbox']").each(function(){
      numberOfCheckboxes++;
      if($(this).prop("checked") == true){
        numberChecked++
      }
    });
    //https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_progress
    $("#progress-bar").attr("value", numberChecked);
    $("#progress-bar").attr("max", numberOfCheckboxes);
});




$("#submit-button").click(function(){
  //storing the boolean value of "is the checkbox with an id of 'acknowledgement-checkbox' checked"
  var isAcknowledgementChecked = $("#acknowledgement-checkbox").prop("checked")

  //if that values returns false
  //if the checkbox is not checked
  if(!isAcknowledgementChecked){
    //alert the user that this must be checked before they can move on
    alert("Please acknowledge before submitting")
  }
})
