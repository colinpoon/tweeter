// // TEST 
// const tweetData = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": "https://i.imgur.com/73hZDYK.png",
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1633374227419
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": "https://github.com/colinpoon/tweeter/blob/master/public/images/tweeter1.png?raw=true",
//       "handle": "@rd"
//     },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1633374227419
//   }
// ];


$(document).ready(function () {
  const createTweetElement = function (tweet) {
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
        <h2>${tweet.content.text}</h2>
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
      // calls createTweetElement for each tweet
      const tweet = createTweetElement(element);
      // takes return value and appends it to the tweets container 
      $('#tweets-container').prepend(tweet);
    });
  };
  // $('#tweet-form).on('submit', function(event){ --------> nothing seems to work?
  $("#tweet-form").submit(function (event) {
    event.preventDefault();
    //const text = $('#tweet-form);
    // console.log(text);
    //const text = $('#tweet-text);
    // console.log(text);
    //const count = text.length;
    // console.log(count);
    // if (count === 0){
    //   return alert("You're not saying anything");
    // }
    // if (count > 0){
    //   return alert("You talk too much!");
    // }
    const tweetData = $("#tweet-text").serialize();
    $.ajax({
      type: "POST",
      url: "/tweets/",
      data: tweetData,
    })
    .then(function(data){
     loadTweets();
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
    .then(function(data){
      $tweetData.empty();
      renderTweets(data) 
    })
  };
  loadTweets();
});

// $("#tweet-form").submit(function (event) {
//   // $("#tweet-form").on("submit", function(event) {
//     event.preventDefault();
//     const text = $("tweet-text").val();
//     console.log(text);
//     // if (count === 0) {
//     //   return alert('Nothing to tweet!');
//     // }
//     // if (count > 140){
//     //   return alert('You talk too much!');
//     // }
//     const tweetData = $("#tweet-text").serialize();
//     $.ajax({
//       type: "POST",
//       url: "/tweets/",
//       data: tweetData,
//     })
//     .then(function(data){
//      loadTweets();
//     })
  // });


