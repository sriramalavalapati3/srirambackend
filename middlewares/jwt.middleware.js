const jwt = require('jsonwebtoken');

 const auth=(req, res,next)=>{
    const token=req.headers.auth
    if(token){
        const decoded=jwt.verify(token, "Sriram")
      req.body.userId=decoded.userId
    
        if(decoded){
            next()
        } else
        {
            res.send("Please Login First")
        }
    } else
    {
        res.send ("Please Login First")
    }
}


module.exports={auth}
