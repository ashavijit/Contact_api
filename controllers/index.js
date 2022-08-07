var Contact=require('./');

//testing
exports.test=function(req,res){
    res.send('ProductSchema is working');
};

//create a new contact
exports.contact_create=function(req,res){
    var contact=new Contact({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        mobile_no:req.body.mobile_no,
        email:req.body.email
    });
    contact.save(function(err){
        if(err){
            res.send(err);
        }
        res.send('contact created successfully');
    });
};

exports.contact_list=function(req,res){
    contact.findById(function(err,contact){
        if(err){
            res.send(err);
        }
        res.json(contact);
    })
};

exports.contact_update=function(req,res){
    Contact.findByIdAndUpdate(req.params.contact_id,{$set:req.body},function(err,contact){
        if(err){
            res.send(err);
        }
          res.json(contact);    //return the contact
    });
}

exports.contact_delete=function(req,res){
    Contact.findByIdAndRemove(req.params.contact_id,function(err){
        if(err){
            res.send(err);
        }
        res.send('contact deleted successfully');
    });


}


