const crypto = require('crypto').randomBytes(256).toString('hex');
module.exports = {
    //uri:'mongodb://localhost:27017/mean-angular-2',
    uri: 'mongodb://blog:arb1tech@ds149373.mlab.com:49373/blog',
    secret: crypto,
    db: 'blog',
}