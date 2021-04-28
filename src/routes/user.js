const express = require("express");
const { signup, signin } = require("../controllers/user");
const { validatesignupRequest, isRequestValidated, validatesigninRequest } = require("../validators/auth");
const router = express.Router();



router.post("/signin", validatesigninRequest, isRequestValidated, signin);

router.post("/signup",validatesignupRequest,isRequestValidated, signup);

module.exports = router;
