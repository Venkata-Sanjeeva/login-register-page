const jwt = require("jsonwebtoken")

const logInAuthMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if(!authHeader || !authHeader.startsWith("Bearer ") || authHeader.includes("null")) {
        
        return res.status(401).json({
            msg: "No Token is Provided!"
        });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { id, emailId, username, password } = decoded;
        
        const reqEmailId = req.body.emailId;
        const reqPassword = req.body.password;
        
        
        if(reqEmailId === emailId && reqPassword === password) {
            req.user = { emailId, id, username, password };
        } 
        
        if (!req.user) {
            return res.status(401).json({
                msg: "UnAuthorized!"
            });
        }
        next();
    } catch (error) {
        console.log("from catch block");
        console.log(error);
    }
    
}

module.exports = logInAuthMiddleware;