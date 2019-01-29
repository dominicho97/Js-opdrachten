/**
 * Opdracht over Functiechaning
 * There are multiple ways to solve this so find the most
 * effecient one.
 */

// Give the size of the string
var CountString = function() {
  let randomString = "This is a string.";
  console.log(randomString.split("is").length - 1);
};

// Replace the first word in the chain to a C
var ReplaceThis = function() {
  let str1 = "Dominic is cool";
  let rep = str1.replace("Dominic", "C");
  console.log(rep);
};

// Concatenate the two strings
var ConcatString = function() {
  const text1 = "Hello";
  const text2 = "World!";
  console.log(text1 + "" + text2);
};

// Display the fifth character of the string
var DisplayChar5 = function() {
  const str2 = "Hello";
  const fifth = str2.slice(0, 4);
  console.log(fifth);
};

// Display the first 9 characters
var DisplayChar9 = function() {
  const stringExample = "abcdefghijklmnop";
  const chacka = stringExample.slice(10, 16);
  console.log(chacka);
};
// Capitalize the string

var CapitalString = function() {
  const stringToCap = "CapMeMate";
  console.log(stringToCap.toUpperCase());
};

// Put the string in lowercase
var MinimalizeString = function() {
  const stringToMin = "minMeMate";
};

// Delete spaces before and after the chain
var SupprEspaceString = function(text) {};

// Show true if the input parameter of the function is of type string
var IsString = function(text) {};

// Display the file extension
var ExtensionString = function(text) {};

// Count the number of spaces in the chain
var NumberEspaceString = function(text) {};

// Reverse a string of characters
var InverseString = function(text) {};

/**
 * Oefeningen over getallen en wiskundige berekeningen
 */

// Calculate the power of one number in relation to another (x to the power y)
var CalculationPower = function(x, y) {};

// Display the absolute value of a number
var ValueAbsolute = function(number) {};

// Display the absolute values of several numbers
var ValueAbsoluteArray = function(array) {};

// Calculate the surface area of a circle according to its radius. Round it up to the nearest integer
var SufaceCircle = function(radius) {};

// Calculate the hypothenuse of a rectangular triangle
var Hypothenuse = function(ab, ac) {};

// Calculate the BMI (Weight / (height x height). Keep only two digits after the decimal point.
var CalcIBM = function(weight, height) {};
