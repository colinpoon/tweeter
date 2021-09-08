const div1 = document.getElementById("counter");
$(document).ready(function() {
console.log(this);
});

$("#btn").on('click', function() {
  console.log(this); //The this keyword is a reference to the button
});

$("#btn").on('click', () => {
  console.log(this); //The this keyword here refers to something else!
});