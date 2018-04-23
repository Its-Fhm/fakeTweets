const fs = require('fs');

class Users {
    static getUsers () {
        try {
            const data = fs.readFileSync('../data/user.txt', 'utf8');

            let splitted = data.toString().split(" follows ");
            let losers = splitted.toString().split("\r\n");

            losers.splice(2, 2);

            let users_list = this.uniqueArray(losers.toString().split(",").sort());
            let users = users_list.join('\r\n');
            return users_list;

        } catch (er) {
            console.log('error reading user file, ', er);
            throw new Error('error reading user file');
        }
    }

    static uniqueArray (arry) {
        return arry.filter(function(elem, pos) {
            return arry.indexOf(elem) == pos;
        })
    }
}

module.exports = Users;
