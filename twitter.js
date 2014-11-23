var CronJob = require('cron').CronJob;
var Twit = require('twit');
var fs = require('fs');

var T = new Twit({
    consumer_key:         ''
  , consumer_secret:      ''
  , access_token:         ''
  , access_token_secret:  ''
});

new CronJob('0 0 * * * *', function () {
	var tweets=fs.readFileSync('./tweets.json');
	tweets= JSON.parse(tweets);
	var tweet= tweets[Math.floor(Math.random()*(tweets.length))].text;
	T.post('statuses/update', { status: tweet }, function(err, data, response) {
	  console.log(data)
	})
}, null, true);