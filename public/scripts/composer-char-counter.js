
// CHARACTER COUNTER
$(document).ready(function () {
  const tweetText = document.getElementById("tweet-text");
  // EVENTS TRIGGERS ON KEY UP
  $(tweetText).on('keyup', function (event) {
    let charCount = event.target.value.length;
    const $counter = $(this).siblings('.submit').children('.counter');
    $counter.text(140 - charCount);
    // CSS CHANGE TO RED WHEN COUNTER < 0
    if (charCount > 140) {
      $counter.css('color', '#f97f58');
    } else {
      // CSS CHANGE TO DEFAULT WHEN COUNTER RETURNS BACK TO > 0
      $counter.css('color', '#204d36')
    }
  });
});
