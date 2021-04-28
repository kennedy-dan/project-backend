const express = require("express");
const { reportCrime, getCrimeReport } = require("../controllers/crimereport");
const { signup, signin } = require("../controllers/user");
const { requireSignin, userMiddleware } = require("../middleware");
const { validatesignupRequest, isRequestValidated, validatesigninRequest } = require("../validators/auth");
const router = express.Router();



router.post("/crimereport", requireSignin ,  reportCrime);
router.get("/getcrimereport",requireSignin, getCrimeReport)

// router.post("/signup",validatesignupRequest,isRequestValidated, signup);

module.exports = router;
