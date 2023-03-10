const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchmea = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    description: {
      type: String,

      required: true,
      maxlength: 2000,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 2000,
    },
    category: {
      type: ObjectId,
      required: true,
      ref: "Category",
      maxlength: 2000,
    },
    quantity: {
      type: Number,
    },
    sold: {
      type: Number,
      default: 0,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    shipping: { required: false, type: Boolean },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", productSchmea);
