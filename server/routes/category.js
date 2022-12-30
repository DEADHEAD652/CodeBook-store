const express = require("express");
const router = express.Router();
const { requireSignin, isAdmin, isAuth } = require("../controllers/auth");

const { create } = require("../controllers/category");
const { userByID } = require("../controllers/user");

router.post("/category/create/:userID", requireSignin, isAdmin, isAuth, create);

router.param("userID", userByID);

module.exports = router;
