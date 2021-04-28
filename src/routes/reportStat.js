const express = require("express");
const { reportStats, getReportStatus } = require("../controllers/reportStatus");
const { requireSignin, userMiddleware } = require("../middleware");
const router = express.Router();



router.post("/reportstat", requireSignin ,  reportStats);
router.get("/getreportstat",requireSignin, getReportStatus)

// router.post("/signup",validatesignupRequest,isRequestValidated, signup);

module.exports = router;
