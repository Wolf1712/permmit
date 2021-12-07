const express=require('express');
const router = express.Router();
const askmessage=require('../schema/askschema');




// sending message to admin
router.post('/addmesage',async(req,res)=()=>{
    try{
        const {name,section,year,caption,message,date}=req.body;
        const note = new askmessage({
            name, section, year,caption,message,date
        })
        const savednote=await note.save()
        res.json(savednote);

    }
    catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


// deleting an existing message until it gets accepted by the admin pending
router.delete('/deletemessage/:id',async(req,res)=()=>{
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
