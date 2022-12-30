const mongoose = require("mongoose");

const categorySchmea = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
      maxlength: 32,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Category", categorySchmea);
