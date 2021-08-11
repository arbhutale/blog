const fs = require('fs');

if (fs.existsSync('./public')) {
  process.env.NODE_ENV = 'production';
  process.env.databaseUri = 'mongodb://blog:admin@cluster0-shard-00-00.xsyd5.mongodb.net:27017,cluster0-shard-00-01.xsyd5.mongodb.net:27017,cluster0-shard-00-02.xsyd5.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-106no0-shard-0&authSource=admin&retryWrites=true&w=majority'; // Databse URI and database name
  process.env.databaseName = 'production database: angular-2-app'; // Database name
} else {
  process.env.NODE_ENV = 'development';
  process.env.databaseUri = 'mongodb://blog:admin@cluster0-shard-00-00.xsyd5.mongodb.net:27017,cluster0-shard-00-01.xsyd5.mongodb.net:27017,cluster0-shard-00-02.xsyd5.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-106no0-shard-0&authSource=admin&retryWrites=true&w=majority'; // Databse URI and database name
  process.env.databaseName = 'development database: mean-angular-2'; // Database name
}
