const express = require("express");
const { signup, signin } = require("../../controllers/admin/user");
const {
  validatesignupRequest,
  isRequestValidated,
  validatesigninRequest,
} = require("../../validators/auth");
const router = express.Router();

router.post("/admin/signin", validatesigninRequest, isRequestValidated, signin);

router.post("/admin/signup", validatesignupRequest, isRequestValidated, signup);

module.exports = router;
