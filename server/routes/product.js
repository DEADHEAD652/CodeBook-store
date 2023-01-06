const express = require("express");
const router = express.Router();

const { requireSignin, isAdmin, isAuth } = require("../controllers/auth");

const {
  create,
  productByID,
  read,
  remove,
  update,
  list,
  listRelated,
  listCategories,
  listBySearch,
  photo,
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
router.get("/products", list);
router.get("/products/related/:productID", listRelated);
router.get("/products/categories", listCategories);
router.post("/products/by/search", listBySearch);
router.get("/products/photo/:productID", photo);

router.param("userID", userByID);
router.param("productID", productByID);

module.exports = router;
