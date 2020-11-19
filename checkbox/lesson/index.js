//if any checkbox within the '.w3-checkboxes' class is clicked
$('.w3-checkboxes > input[type="checkbox"]').click(function(){
    //logging the value of the checked input
    console.log($(this).val());

    //if it is checked, then log that it is checked
    if($(this).prop("checked") == true){
        console.log("Checkbox is checked.");
    }
    //if it is unchecked, then log that it is unchecked
    else if($(this).prop("checked") == false){
        console.log("Checkbox is unchecked.");
    }


    var numChecked = 0;
    //looping through all of the checkboxes in the 'w3-checkboxes' class on the dom
    $(".w3-checkboxes").children("input[type='checkbox']").each(function(){
      //logging through each child element in the div
      console.log($(this));

      //if the checkbox is checked
      if($(this).prop("checked") == true){
        //increment numChecked by 1
        numChecked++
      }

      //if numChecked is equal to the amount of the checkboxes in the 'w3-checkboxes' class
      if(numChecked == $(".w3-checkboxes").children("input").length){
        //log that all 3 of the checkboxes in that div are checked
        console.log("all of the checkboxes in the w3-checkboxes class are checked")
      }
    });
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
