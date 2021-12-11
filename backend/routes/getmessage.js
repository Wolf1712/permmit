const express=require('express');
const router = express.Router();
const acceptedmessage=require('../schema/acceptedschema');
const askmessage=require('../schema/askschema');


// fetching all the message permisons from database
router.get('/fetch',async (req,res)=>{
    try{
        
       let messages = await askmessage.find({});
       res.json(messages);
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

//  Edit Message for Status Check sucess true
router.put('/update/:id',async(req,res)=>{
    //  const status="true"
  try{
    const note = await askmessage.findByIdAndUpdate(req.params.id, { $set: {'status': "true"} }, { new: true })
    console.log(note);
    res.json({ note });
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
}
})
//  Edit Message for Status Check sucess false
router.put('/false/:id',async(req,res)=>{
    //  const status="true"
  try{
    let magic = await askmessage.findByIdAndUpdate(req.params.id, { $set: {'status': "false"} }, { new: true })
    console.log(magic);
    res.json({ magic });
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
}
})
// fetching details for user for view my permison
// router.get('/:name',async(req,res)=>{
//     //  const status="true"
//   try{
//     const mag = await askmessage.findOne({name : req.params.name})
    
//     res.json(mag); 
//     console.log(req.params.name);
    
// } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
// }
// })
module.exports = router;