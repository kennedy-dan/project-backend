const express = require("express");
const {updateReport} = require("../../controllers/admin/crimeReport")
const { requireSignin, userMiddleware } = require("../../middleware");
// const { validatesignupRequest, isRequestValidated, validatesigninRequest } = require("../validators/auth");
const router = express.Router();



router.post("/admincrimereport", requireSignin ,  updateReport);

// router.post("/signup",validatesignupRequest,isRequestValidated, signup);

module.exports = router;
