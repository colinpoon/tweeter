//XSS
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};


$(document).ready(function () {
  const createTweetElement = function (tweet) {
    const safeHTML = escape(tweet.content.text);
    let $tweet = `
  <article class="tweets">
    <header class="tweet-header">
      <span class="tweeter-profile">
        <img src=${tweet.user.avatars}>
        <h2>${tweet.user.name}</h2>
      </span>
      <span class="userhandle">
      <h2>${tweet.user.handle}</h2>
      </span>
    </header>
      <form></form>
      <div class="tweet-post-content">
        <h2>${safeHTML}</h2>
      </div>
      </form>
      <footer>
        <div>
          <p>${timeago.format(tweet.created_at)}</p>
        </div>
        <div> 
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </footer>
  </article>`;
    return $tweet;
  };

  const renderTweets = function (tweets) {
    tweets.forEach(element => {
      $(".tweets-container").empty(); // ---------------> check
      const tweet = createTweetElement(element);
      $('#tweets-container').prepend(tweet);
    });
  };

  $("#tweet-form").submit(function (event) {
    event.preventDefault();
    const $text = $('#tweet-text');
    const $count = $text.val().length;
    const $error = $('#error');

    if ($count === 0 || $count === null) {
      return $error.slideDown('swing');
      // return alert("You're not saying anything");
    }
    if ($count > 140) {
      return $error.slideDown('swing');
    }

    const tweetData = $("#tweet-text").serialize();
    $.ajax({
      type: "POST",
      url: "/tweets/",
      data: tweetData,
      /*
      success: function (data) {
          $('$count').val('')
      */
    })
      .then(function (data) {
        loadTweets();
        // id_objective_details_elem.text('');
        // resetCharacterCount()
      })
      .then(function (data) {
        $text.val('');
        $error.slideUp('swing');
      })
  });

  const loadTweets = function () {
    const $tweetData = $('#tweets-container');
    const $tweetText = $('#tweet-text');
    $.ajax({
      url: '/tweets/',
      method: 'GET',
      dataType: "JSON",
    })
      .then(function (data) {
        $tweetData.empty();
        renderTweets(data)
      })
  };


  /// SCROLL TO TOP
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() - 200 > 0) {
        $('#to-top').stop().slideDown('fast');
      } else {
        $('#to-top').stop().slideUp('fast');
      }
    });
  });
  $("#to-top").on("click", function () {
    $("html, body").animate({
      scrollTop: 0
    }, 200);
  });

  //NEW TWEET SLIDE OUT ANIMATION
  $(".nav-med-vertical").click(function () {
    $("#tweet-text").show().focus();
    $(".new-tweet").slideToggle("slow", function () {
      // Animation complete.
    });
  });

  loadTweets();

  ///DOCUMENT READY
});
  //NEW TWEET SLIDE OUT ANIMATION ---> OPTION TWO
  //   $(".nav-med-vertical").on("click", () => {
  //   if ($(".new-tweet").first().is(":hidden")) {
  //     $(".new-tweet").slideDown("medium");
  //     $("#tweet-text").show().focus();
  //   } else {
  //     $(".new-tweet").slideUp("medium");
  //   }
  // });
