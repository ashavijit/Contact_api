const mongoose = require('mongoose');

//connect to mongodb

mongoose.connect(process.env.MONGODB_URI,{
    keepAlive:true,
    useNewUrlParser:true,
}).then(()=>{
    console.log('connected to mongodb');
}).catch(err=>{
    console.log('Could not connect to the database. Exiting now...', err);
   process.exit();
    
});
module.exports = mongoose.connection;