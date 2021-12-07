const express=require('express');
const router = express.Router();
const acceptedmessage=require('../schema/acceptedschema');
const askmessage=require('../schema/askschema');

// fetching all the message permisons from database
router.get('/fetchallpermission',async(req,res)=()=>{
    try{
       let messages = await askmessage.find({});
    //    res.json(messages);
       return res.status(200).send(messages); 
    }
    catch(err){
        console.log(err);
        res.json(err);
        res.status(500).json({ message: "Server Error" });
    }
})

// opening particular permission message in admin page
router.put('/:id',async(req,res)=>{
    try {
      let details= await askmessage.findById(req.params.id)  ;
     res.json(details); 
 
 
    } catch (err) {
     res.status(500).json({ message: "Server Error" });
         console.log(err);
    }
 
 })

//  
// router.post('/accepted/:id',async(req,res)=()=>{

//   try()


// })
module.exports = router;