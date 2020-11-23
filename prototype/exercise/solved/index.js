var currentUserNames = ["memer27", "jumbo-shrempf", "class-of-1984"];

$("#first-form").submit(function(e){
  e.preventDefault();

  var name = $("#name-input").val();
  var email = $("#email-input").val();
  var username = $("#username-input").val();
  var password = $("#password-input").val();

  if(name.isBlank()){
    alert("please enter name")
  } else if (!email.isValidEmail()){
    alert("please enter valid email")
  } else if (currentUserNames.usernameExists(username)){
    alert("username is already taken")
  } else if (!password.isValidPassword()){
    alert("password is invalid. It must be at least 7 characters and contain a symbol");
  }

  var creds = {
    name: name,
    email: email,
    username: username,
    password: password,
  }

  console.log(creds);
});

String.prototype.isBlank = function(){
  return this == "";
};

String.prototype.isValidEmail = function(){
  return this.indexOf("@") > -1 && this.indexOf(".") > -1;
}

Array.prototype.usernameExists = function(username){
  return this.indexOf(username) > -1
}

String.prototype.isValidPassword = function(){
  return this.length > 6;
}
