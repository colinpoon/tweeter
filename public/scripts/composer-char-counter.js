


/*
> set characterCount as a variable equal to 140 
> On keypress or key down character count -1 
> On delete (key id of delete) character count +1
> If character count < 0 change color (and make it negative if needed)
> If character count < 0 return an error message... (event?)
>if character count > 0 then tweet can be sent.
*/
$(document).ready(function() {
  // console.log("I'm ready! <----------");
  // console.log(tweetText);
 const tweetText = document.getElementById("tweet-text");
 const counter = document.getElementById("counter");

$( "#tweet-text" ).keypress(function() {
  console.log( "Handler for .keypress() called." );
  // console.log('Keypress event', this);
});
$( "#tweet-text" ).keyup(function() {
  console.log( "Handler for .keyUP() called." );
  // console.log('Key Up event', this);
});
// $( "#counter" ).click(function() {
//   $( "#tweet-text" ).keypress();
//   $( "#tweet-text" ).keypress(this);
// });
$("#tweet-text").on('click', function() {
  console.log(this);
});
});








// $(document).ready(function() {
//   const tweetText = document.getElementById("tweet-text");
//   console.log(this);

// $(tweetText).on('input', function(event) {
//   // console.log(event.target.value);
//   let text = event.target.value;
//   let output = $("output.counter")
//   if (text.length < 0) {
//     // add danger text class
    
//   } else {
//     // remove danger text class (140 -text.length)
//   }

// });


// });

// //jq selector method

// $( "#tweet-text" ).keydown(function() {
//   // console.log( "Handler for .keypress() called." );
//   console.log('Key Down event', this);
// });
// $( "#tweet-text" ).blur(function() {
//   // console.log( "Handler for .keypress() called." );
//   console.log('Blur event', this);
// });
// $( "#tweet-text" ).change(function() {
//   // console.log( "Handler for .keypress() called." );
//   console.log('Change event', this);
// });
// $( "#tweet-text" ).input(function() {
//   // console.log( "Handler for .keypress() called." );
//   console.log('Input event', this);
// });