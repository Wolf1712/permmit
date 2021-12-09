const verify = require("../middleware/verify").verify;
const user = require("../schema/users");
const jwt = require("jsonwebtoken");

const login = async (req,res) => {
    try{
        let {username,password} = req.body;
        const response = await user.findOne({
            username,
            password
        });
        if(response){
            const token = await jwt.sign({
                username:response.username,
                email:response.email,
                role:response.role
            },"mukesh");
            return res.status(200).json({
                success:true,
                data:{
                    token,
                    username:response.username,
                    email:response.email,
                    role:response.role
                },
            });
        }else{
            return res.status(200).json({
                success:false,
                message:"invalid details"
            });
        }
    }catch(err){
        return res.status(500).json({
            success:false,
            error:"Internal server error"
        })
    }
}

module.exports = {
    login
}