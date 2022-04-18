// For production environment never expose your connection string.
let URI = "mongodb+srv://dbadmin:8Bqc04dvx01sXaY7@clusters003.zkagh.mongodb.net/mydb?authSource=admin&replicaSet=atlas-4yi72y-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"


//Database setup
let mongoose = require('mongoose');

module.exports = function(){

    // Connect to the Database
    mongoose.connect(URI);

    let mongoDB = mongoose.connection;
   
    mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
    mongoDB.once('open', ()=>{
        console.log('Connected to MongoDB...');
    });

    return mongoDB;
}