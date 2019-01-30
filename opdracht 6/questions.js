// Create a array containing "Html", "CSS", "Java", "PHP"
var CreationArrayLanguages = function() {
  const createArray = ["Html", "CSS", "Java", "PHP"];
  console.log(createArray);
};

// Create a array containing the numbers from 0 to 5
var CreateArrayNumbers = function() {
  const numberArray = [0, 1, 2, 3, 4, 5];
  console.log(numberArray);
};

// Replace the third element of the array with "Javascript"
var languages = ["Html", "CSS", "Java", "PHP"];
var ReplacementElement = function(languages) {
  const word = /Java/gi; // replace the word Java
  console.log(languages.replace(word, "Javascript"));
};

// Add "Ruby" and "Python" at the end of the array
var languages = ["Html", "CSS", "Javascript", "PHP"];
var AddElementLanguages = function(languages) {
  languages.push("Ruby", "Python");
  console.log(languages);
};

// Add "-2" and "-1" at the beginning of the table numbers
var numbers = [0, 1, 2, 3, 4, 5];
var AddElementNumbers = function(numbers) {
  numbers.unshift(-2, -1);
  console.log(numbers);
};
// Delete the first element of the languages array
var languages = ["Html", "CSS", "Javascript", "PHP", "Ruby", "Python"];
var DeletingFirstElement = function(languages) {
  languages.shift();
  console.log(languages);
};

// Delete the last element of the languages array
var languages = ["CSS", "Javascript", "PHP", "Ruby", "Python"];
var DeleteLastElement = function(languages) {};

// Make the "social_networks_chain" chain into a "social_networks" array
var social_networks_chain = "Facebook,Twitter,Google +,Viadeo,LinkedIn";
var ArrayStringConversion = function(social_networks_chain) {
  const deleteLast = social_networks_chain.splice(2, 4);
  console.log(social_networks);
};

// Make the "languages" array into a "languages_chaine" string. Separate languages with a comma
var languages = ["CSS", "Javascript", "PHP", "Ruby"];
var ChainArrayConversion = function(languages) {};

// Sort the "social_networks" array
var social_networks = ["Facebook", "Twitter", "Google +", "Viadeo", "LinkedIn"];
var SortingArray = function(social_networks) {
  const sortedArray = social_networks.sort();
  console.log(social_networks);
};

// Bonus: Reverse the "languages" array
var languages = ["CSS", "Javascript", "PHP", "Ruby"];
var ReverseArray = function(languages) {
  const reversed = languages.Reverse();
  console.log(languages);
};
