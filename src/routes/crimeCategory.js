const express = require("express");
const { createcrimeCategories, getcrimeCategories } = require("../controllers/crimeCategory");
const router = express.Router();
const {requireSignin, adminMiddle} = require('../middleware/index')
const multer = require("multer");
const shortid = require('shortid')
const path = require('path')

const {
  validatesignupRequest,
  isRequestValidated,
  validatesigninRequest,
} = require("../validators/auth");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function (req, file, cb) {
      cb(null,shortid.generate() + '-' + file.originalname)
    }
  })
   
  const upload = multer({storage})

router.post("/crimecategory", requireSignin,adminMiddle, upload.single('categoryImage'),createcrimeCategories);
router.get('/getcrimecategory', getcrimeCategories)

module.exports = router;

