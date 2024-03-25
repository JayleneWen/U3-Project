// Declare variables below to save the different divs of your story.
let storyOpening = document.querySelector(".story-opening");
let optionOne = document.querySelector(".option-one");
let optionTwo = document.querySelector(".option-two");
let optionOneScreen = document.querySelector(".option-one-screen");
let optionTwoScreen = document.querySelector(".option-two-screen");
let optionOneEnd = document.querySelector(".option-one-end");
let optionTwoEnd = document.querySelector(".option-two-end");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");









// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


optionOne.addEventListener('click', function() {
  storyOpening.style.display = "none";
  optionOneScreen.style.display = "block";
button2.style.display = "block";
});

optionTwo.addEventListener('click', function() {
  storyOpening.style.display = "none";
  optionTwoScreen.style.display = "block";
  button3.style.display = "block";

});

// optionThree.addEventListener('click', function(){

// });