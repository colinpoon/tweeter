
$(document).ready(function() {
  const tweetText = document.getElementById("tweet-text");
  console.log(this);

$(tweetText).on('input', function(event) {
  // console.log(event.target.value);
  let text = event.target.value;
  let output = $("output.counter")
  if (text.length < 0) {
    // add danger text class
    
  } else {
    // remove danger text class (140 -text.length)
  }

});


});

//jq selector method