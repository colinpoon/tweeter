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
      const tweet = createTweetElement(element);
      $('#tweets-container').prepend(tweet);
    });
  };

  $("#tweet-form").submit(function (event) {
    event.preventDefault();
    console.log(event);
    const $text = $('#tweet-text');
    const $count = $text.val().length;
    const $error = $('#error');

    if ($count === 0 || $count === null) {
      return $error.slideDown();
      // return alert("You're not saying anything");
    }
    if ($count > 140) {
      return $error.slideDown(); 
      // return $("You talk too much!").slideDown(); 
    }

    const tweetData = $("#tweet-text").serialize();
    $.ajax({
      type: "POST",
      url: "/tweets/",
      data: tweetData,
    })
      .then(function (data) {
        loadTweets();
      })
      .then(function (data) {
        $text.val('');
        $error.slideUp();
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
  loadTweets();

  // style css for errors
  // display errors instead of alerts*

});
