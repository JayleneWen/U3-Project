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
let optionAnswerThePhoneCallScreen = document.querySelector(".option-Answer-the-phone-call-screen");
let option1Three = document.querySelector(".option1-three");
let option3Four = document.querySelector(".option3-four");
let dead = document.querySelector(".dead");
let option2One = document.querySelector(".option2-one");
let alone = document.querySelector(".alone");
let button5 = document.querySelector(".button5");
let killIt = document.querySelector(".kill-it");
let kill = document.querySelector(".kill");
let run = document.querySelector(".run");
let running = document.querySelector('.running');
let button6 = document.querySelector(".button6");
let avoid = document.querySelector(".avoid");
let call = document.querySelector(".call");
let check = document.querySelector('.check');
let option2Two = document.querySelector(".option2-two");
let restart = document.querySelector(".restart");


const input = document.getElementById("myInput");
const inputValue = input.value;
console.log(inputValue);



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
  button4.style.display = "none";
  restart.style.display = "block";
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

option3Four.addEventListener('click', function() {
  storyOpening.style.display = "none";
  optionAnswerThePhoneCallScreen.style.display = "none";
  optionTwoScreen.style.display = "none";
  optionOneScreen.style.display = "none";
  optionOneEnd.style.display = "none";
  button4.style.display = "none";
  dead.style.display = "block";
  restart.style.display = "block";
});

option2One.addEventListener('click', function() {
  storyOpening.style.display = "none";
  alone.style.display = "block";
  button5.style.display = "block";
  optionTwoScreen.style.display = "none";
  optionOneScreen.style.display = "none";
});

kill.addEventListener('click', function() {
  storyOpening.style.display = "none";
  killIt.style.display = "block";
  button5.style.display = "none";
  optionTwoScreen.style.display = "none";
  optionOneScreen.style.display = "none";
  alone.style.display = "none";
  button4.style.display = "block";
});

run.addEventListener('click', function() {
  storyOpening.style.display = "none";
  running.style.display = "block";
  button5.style.display = "none";
  optionTwoScreen.style.display = "none";
  optionOneScreen.style.display = "none";
  alone.style.display = "none";
  restart.style.display = "block";
});

avoid.addEventListener('click', function() {
  storyOpening.style.display = "none";
  optionTwoEnd.style.display = "block";
  button6.style.display = "none";
  optionTwoScreen.style.display = "none";
  optionOneScreen.style.display = "none";
  killIt.style.display = "none";
});

check.addEventListener('click', function() {
  storyOpening.style.display = "none";
  dead.style.display = "block";
  button6.style.display = "none";
  optionTwoScreen.style.display = "none";
  optionOneScreen.style.display = "none";
  killIt.style.display = "none";
  restart.style.display = "block";
});

  option2Two.addEventListener('click', function() {
  storyOpening.style.display = "none";
  button6.style.display = "none";
  optionTwoScreen.style.display = "none";
  optionOneScreen.style.display = "none";
  killIt.style.display = "none";
  call.style.display = "block";
  restart.style.display = "block";
});

restart.addEventListener('click', function() {
  storyOpening.style.display = "block";
  button6.style.display = "none";
  optionTwoScreen.style.display = "none";
  optionOneScreen.style.display = "none";
  killIt.style.display = "none";
  call.style.display = "none";
  restart.style.display = "none";
  optionOneEnd.style.display = "none";
  optionTwoEnd.style.display = "none";
  optionAnswerThePhoneCallScreen.style.display = "none";
  check.style.display = "none";
  alone.style.display = "none";
  run.style.display = "none";
  running.style.display = "none";
  dead.style.display = "none";
  });



