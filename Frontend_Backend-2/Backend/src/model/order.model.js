const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
     user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
      product:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: "ecommerceProduct",
      required: true,
    }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const order = mongoose.model("order", orderSchema);

module.exports = order;
