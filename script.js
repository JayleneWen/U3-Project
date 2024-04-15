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
let button4 = document.querySelector(".button4");
let option1One = document.querySelector(".option1-one");
let option1Two = document.querySelector(".option1-two");
let optionAnswerThePhoneCallScreen = document.querySelector( ".option-Answer-the-phone-call-screen");
let option1Three = document.querySelector(".option1-three")









// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.

// let option1TwoButton = document.querySelector(".option1-two");
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

option1One.addEventListener('click', function() {
  storyOpening.style.display = "none";
  optionAnswerThePhoneCallScreen.style.display = "block";
  optionTwoScreen.style.display = "none";
  optionOneScreen.style.display = "none";
  button4.style.display = "block";
});

option1Two.addEventListener('click', function() {
  storyOpening.style.display = "none";
  optionOneEnd.style.display = "block";
  optionTwoScreen.style.display = "none";
  optionOneScreen.style.display = "none";
  button4.style.display = "block";
});
 

  option1Three.addEventListener('click', function() {
    storyOpening.style.display = "none";
   
    optionAnswerThePhoneCallScreen.style.display = "none";
    optionTwoScreen.style.display = "none";
    optionOneScreen.style.display = "none";
    optionOneEnd.style.display = "none";
    button4.style.display = "none";
    optionTwoEnd.style.display = "block";
    
  });

// optionThree.addEventListener('click', function(){

// });