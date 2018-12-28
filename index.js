const crypto = require('crypto');

module.exports = {
    generateHash: function(password){
        return crypto.pbkdf2Sync(password, 'salt', 100000, 64, 'sha512').toString('hex');
    },
    comparePassword: function(){}
}
