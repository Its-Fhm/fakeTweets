const Users = require('./Users');
const Tweets = require('./Tweets');

class TwitterTweet {
    constructor () {
        this.user = Users;
        this.tweet = Tweets;
    }

    getFeed () {
        const users = this.user.getUsers();
        const tweet = this.tweet.getTweets();

        let userTweets = users.concat(tweet);
        const filterItems = (query) => {
            return userTweets.filter((el) =>
                el.toLowerCase().indexOf(query.toLowerCase()) > -1
            );
        }
        console.log(filterItems('Alan').join('\r\n'));
        console.log(filterItems('Martin').join('\r\n'));
        console.log(filterItems('Ward').join('\r\n'));
        console.log(filterItems('@Alan').join('\r\n'));



        //console.log(array3);
    }
}

const tweeter = new TwitterTweet();
tweeter.getFeed();