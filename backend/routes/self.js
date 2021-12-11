const express=require('express');
const router = express.Router();
const askmessage=require('../schema/askschema');


// fetching details for user for view my permison
router.get('/:name',async(req,res)=>{
    //  const status="true"
  try{
    const mag = await askmessage.find({name : req.params.name})
    
    res.json(mag); 
    console.log(req.params.name);
    
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
}
})
module.exports = router;