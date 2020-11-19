/*

  - Write prototype validation methods for the input values
    - Create a String method called "isBlank" and check that the name input isn't blank
    - Create a String method called "isValidEmail" and check that the email input is a valid email (has an '@' and a ".")
    - Create a Array method called "usernameExists" and check that the input username doesnt exist in the currentUsernames Array
    - Create a String method called "isValidPassword" and check that the password input is valid (length is greater than or equal to 7)

*/

var currentUserNames = ["memer27", "jumbo-shrempf", "class-of-1984"];

$("#first-form").submit(function(e){
  e.preventDefault();

  var name = $("#name-input").val();
  var email = $("#email-input").val();
  var username = $("#username-input").val();
  var password = $("#password-input").val();

  if(name == ""){
    alert("please enter name")
  } else if (email.indexOf("@") == -1 || email.indexOf(".") == -1){
    alert("please enter valid email")
  } else if (currentUserNames.indexOf(username) > -1){
    alert("username is already taken")
  } else if (password.length < 7){
    alert("password is invalid. It must be at least 7 characters");
  }

  var creds = {
    name: name,
    email: email,
    username: username,
    password: password,
  }

  console.log(creds);
});
