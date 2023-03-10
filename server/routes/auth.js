const express = require("express");
const router = express.Router();

const {
  signup,
  signin,
  signout,
  requireSignin,
} = require("../controllers/auth");
const { userSignUpValidator } = require("../validator/index");

router.post("/Signup", userSignUpValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);
module.exports = router;
