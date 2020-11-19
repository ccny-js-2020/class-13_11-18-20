var stringOne = "bOb";
var stringTwo = "BoBo";

var stringArray = [stringOne, stringTwo]

//creating my own string function and naming it "containsAnO"
//like how we have indexOf & charAt, you can create your own
String.prototype.containsAnO = function(){
  //'this' is the value of the string
  console.log(this)
  //returning a boolean value. if the string contains an O
  return this.indexOf("O") > -1;
};
//logging the return value of the string function that i created
console.log(stringOne.containsAnO());
console.log(stringTwo.containsAnO());

//creating my own string function and naming it "isALengthOfThree"
String.prototype.isALengthOfThree = function(){
  //returning a boolean value. if the length of the string is 3
  return this.length == 3;
}
//logging the return value of the string function that i created
console.log(stringOne.isALengthOfThree());
console.log(stringTwo.isALengthOfThree());

//creating my own string function and naming it "containsInputLetter" and it takes a parameter input
//just like any function you create, you can have as many input parameters as you want. here we just have one
String.prototype.containsInputLetter = function(letter){
  /*
    returning a boolean value
    if the string contains an input letter
  */
  return this.indexOf(letter) > -1;
}
//logging the return value of the string string function that i created
console.log(stringOne.containsInputLetter("O"));
console.log(stringTwo.containsInputLetter("o"));


//creating my own string function and naming it "firstLetterToUppercase"
String.prototype.firstLetterToUppercase = function(){
  //returning the attached string with the first character to uppercase
  return this.charAt(0).toUpperCase() + this.substring(1, this.length);
}

//logging the return value of the function that i created
console.log(stringOne.firstLetterToUppercase());
console.log(stringTwo.firstLetterToUppercase());


//create my own Number function and squaring it
Number.prototype.timesItself = function(){
  return this * this;
}
var num = 100;
console.log(num.timesItself());


//you can create your own function for any datatype, not just a string
//like an array too

//creating my own array function and name it "toStringSeparatedByPlusSigns"
Array.prototype.toStringSeparatedByPlusSigns = function(){
  //returning the array to string with the indexes separated by +
  return this.join("+");
}
//logging the return value of the array function that i created
console.log(stringArray.toStringSeparatedByPlusSigns())

//creating my own array function and name it "toStringSeparatedByPlusSigns"
Array.prototype.allLastCharactersToUppercase = function(){
  //writing logic to reassign teh value of every string in the array
  //uppercasing the last character of the string in every array
  for(var i = 0; i < this.length; i++){
    this[i] = this[i].substring(0, this[i].length - 1) + this[i].charAt(this[i].length -1).toUpperCase();
  }
  //returning the array
  return this;
}
//logging the return value of the array function that i created
console.log(stringArray.allLastCharactersToUppercase())
