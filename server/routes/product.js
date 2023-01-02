const express = require("express");
const router = express.Router();

const { requireSignin, isAdmin, isAuth } = require("../controllers/auth");

const {
  create,
  productByID,
  read,
  remove,
  update,
} = require("../controllers/product");
const { userByID } = require("../controllers/user");

router.get("/product/:productID", read);
router.post("/product/create/:userID", requireSignin, isAdmin, isAuth, create);
router.delete(
  "/product/:productID/:userID",
  requireSignin,
  isAdmin,
  isAuth,
  remove
);
router.patch(
  "/product/:productID/:userID",
  requireSignin,
  isAdmin,
  isAuth,
  update
);

router.param("userID", userByID);
router.param("productID", productByID);

module.exports = router;
