const express=  require('express');
const router=express.Router();

const contact_controller=require('../controllers/index');

router.get('/test',contact_controller.test);


router.post('/contact/create',contact_controller.contact_create);
router.get('/contact/list',contact_controller.contact_list);
router.get('/contact/:contact_id',contact_controller.contact_details);
router.put('/contact/:contact_id/update',contact_controller.contact_update);
router.delete('/contact/:contact_id/delete',contact_controller.contact_delete);

module.exports=router;

//okay

