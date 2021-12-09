const express=require('express');
const router = express.Router();
const askmessage=require('../schema/askschema');
const verify = require("../middleware/verify").verify
// sending message to admin
router.post('/addmessage',async (req,res)=>{
    try{
        verify(req.body.token).then(async (user)=>{
            console.log(user);
            const {section,year,caption,message,date}=req.body;
            const note = new askmessage({
                name:user.username,
                section, year,caption,message
            })
            const savednote=await note.save();
            if(savednote){
                return res.json({
                    success:true,
                    newNote:savednote
                });
            }else{
                return res.json({
                    success:false,
                    newNote:null
                });  
            }
        }).catch((err)=>{
            return res.json({
                success:false,
                message:"invalid token"
            })
        })
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


// deleting an existing message until it gets accepted by the admin pending
router.delete('/deletemessage/:id',async (req,res)=>{
  try{
      let note=await askmessage.findById(req.params.id)
      if (!note) { return res.status(404).send("Not Found") }

      note = await askmessage.findByIdAndDelete(req.params.id)
      res.json({ "Success": "message has been deleted", note});
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})


module.exports = router;
