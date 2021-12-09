const express=require('express');
const router = express.Router();
// const =require('../schema/askschema');

router.post("/login",(req,res)=>{
    require("../controllers/login").login(req,res);
})


module.exports = router;