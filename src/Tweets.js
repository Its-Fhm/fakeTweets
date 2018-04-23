const fs = require('fs');

class Tweets {
    static getTweets () {
        try {
            const data = fs.readFileSync('../data/tweet.txt', 'utf8');

            let rawTweets = data.replace(/>/gi, ':').split("\n").splice(0,3);
            let tweetsArr = rawTweets.map(function(e) { return '@' + e});

            let tweets = tweetsArr.join('\r\n');

            return tweetsArr;
            console.log(tweets);

        } catch (er) {
            console.log('error reading tweet file, ', er);
            throw new Error('error reading tweet file');
        }
    }
}

module.exports = Tweets;
