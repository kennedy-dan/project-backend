const express = require("express");
const { crimeLocation, getLocation } = require("../controllers/crimeLocation");
const router = express.Router();
const {requireSignin, adminMiddle, userMiddleware} = require('../middleware/index')
const multer = require("multer");
const shortid = require('shortid')
const path = require('path')

const {
  validatesignupRequest,
  isRequestValidated,
  validatesigninRequest,
} = require("../validators/auth");



router.post("/crimelocation", requireSignin, crimeLocation);
router.get('/getlocation', getLocation)

module.exports = router;

