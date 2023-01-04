const express = require("express");
const router = express.Router();
const { requireSignin, isAdmin, isAuth } = require("../controllers/auth");

const {
  create,
  categoryByID,
  read,
  update,
  remove,
  readAll,
} = require("../controllers/category");
const { userByID } = require("../controllers/user");

router.get("/category/:categoryID", read);
router.post("/category/create/:userID", requireSignin, isAdmin, isAuth, create);
router.put(
  "/category/:categoryID/:userID",
  requireSignin,
  isAdmin,
  isAuth,
  update
);
router.delete(
  "/category/:categoryID/:userID",
  requireSignin,
  isAdmin,
  isAuth,
  remove
);
router.get("/categories", readAll);

router.param("categoryID", categoryByID);
router.param("userID", userByID);

module.exports = router;
