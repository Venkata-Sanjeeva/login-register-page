const jwt = require("jsonwebtoken")
const path = require("path")


const loginRoute = (req, res) => {
    const user = req.user || { username: "Guest" };
    res.status(200).json({ user })
}

const registerRoute = async (req, res) => {
    const id = new Date().getDate();
    
    const { emailId, username, password } = req.body;
    
    try {
        if(!emailId || !password || !username) {
            return res.status(501).json({err: "Please Enter Register Credentials!"}); 
        }

        const token = jwt.sign({id, emailId, username, password}, process.env.JWT_SECRET, {expiresIn: "30d"}); // this return a encoded token which have the all details of the user login credentials like id and username
    
        res.status(200).json({msg: "user created", token})

    } catch (error) {
        console.log(error);
        
    }
    
}

/*
// const sendRegisterFile = (req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     // console.log(path.join( __dirname, "..", "public", "register.html")); // To navigate back from a child directory to its parent directory using the path module in Node.js with just ".." this
    
//     res.sendFile(path.join( __dirname, "..", "public", "register.html"))
// }
// const sendRegisterJSFile = (req, res) => {
//     res.setHeader('Content-Type', 'application/javascript');
//     res.sendFile(path.join( __dirname, "..", "public", "app.js"))
// }

*/

module.exports = {
    loginRoute,
    registerRoute
}