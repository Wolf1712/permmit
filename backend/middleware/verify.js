const jwt = require("jsonwebtoken");

exports.verify = (token) => {
    return new Promise(async (res,rej)=>{
        try{
            const user = await jwt.verify(token,"mukesh");
            if(user){
                res(user);
            }else{
                rej();
            }
        }catch(err){
            rej(err);
        }
    })
}