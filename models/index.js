const mongoose=require('mongoose');
var Schema=mongoose.Schema;

var ContactSchema=new Schema({
    first_name:{type:String,max:15,required:true},
    last_name:{type:String,max:10,required:true},
    mobile_no:{type:Number,max:10,min:10,required:true},
    email:{type:String,max:20,required:true},
    data_store:{type:Date,default:Date.now}

});

//exporting modules
module.exports=mongoose.model('Contact',ContactSchema);
module.exports.getContacts=function(callback,limit){
    Contact.find(callback).limit(limit);
};

