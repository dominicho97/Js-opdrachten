// EXCERCISE 1
/*
//select body, remove class "bg"-aqua
document.querySelector("body").classList.remove("bg-aqua");

//add class bg-olive
document.querySelector("body").classList.add("bg-olive");

// eerste alinea selecteren,remove bg-lime an gray
document.getElementById("first-paragraph").classList.remove("bg-lime", "gray");

// add aqua class
document.getElementById("first-paragraph").classList.add("bg-aqua");

// select all classes with bg-silver
document.getElementByClassName("bg-silver").classList.add("bg-teal");

// delete class bg-silver
document
  .getElementByClassName("bg-silver")
  .classList.add("bg-teal")
  .classList.remove("bg-silver");

// select all blockquote elements, add class bg-white
document.querySelector("blockquote").classList.add("bg-white");

//EXCERCISE   2
// select my-table with queryselector,add bg-purple
//document.querySelector("my-table").classList.add("bg-purple");

// add class shadow to every paragraph in container
document.querySelectorAll("p").style.textshadow =
  "5px 5px 1px #ff0000,10px 10px 1px #0000ff";*/

//EXCERCISE 3
// Selecteer alle elementen van het type <pre>.M et de eigenschap style wijzigt u de tekstkleur.

document.querySelector("pre").style.color = "yellow";

//met de style eigenschap verandert de achtergrondkleur dankzij backgroundColor.
document.querySelector("pre").style.backgroundColor = "green";

//met de style eigenschap voeg een border-top van 3px solid red toe (vergeet niet dat je op deze manier toegang hebt tot de eigenschappen van een object: ["prop-name"]).
document.querySelector("pre").style.borderTop = "3px solid red";

//met de style eigenschap voeg een border-bottom van 3px solid red toe.
document.querySelector("pre").style.borderBottom = "3px solid red";
