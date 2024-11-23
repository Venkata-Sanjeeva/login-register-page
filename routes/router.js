const express = require("express");

const { loginRoute, registerRoute, } = require("../controllers/routeController")
const logInAuthMiddleware = require("../middleware/logInAuthenticationMiddleware")
const registerAuthMiddleware = require("../middleware/registerAuthMiddleware")

const router = express.Router();


router.route("/login").post(logInAuthMiddleware, loginRoute);
router.route("/register").post(registerAuthMiddleware, registerRoute);

module.exports = router;