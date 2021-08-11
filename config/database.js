const crypto = require('crypto').randomBytes(256).toString('hex');
module.exports = {
    //uri:'mongodb://localhost:27017/mean-angular-2',
    uri: 'mongodb://blog:admin@cluster0-shard-00-00.xsyd5.mongodb.net:27017,cluster0-shard-00-01.xsyd5.mongodb.net:27017,cluster0-shard-00-02.xsyd5.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-106no0-shard-0&authSource=admin&retryWrites=true&w=majority',
    secret: crypto,
    db: 'blog',
}