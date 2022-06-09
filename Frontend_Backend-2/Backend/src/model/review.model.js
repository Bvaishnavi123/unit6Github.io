const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    review:{type:String , required:true},
    product:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "ecommerceProduct",
      required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const review = mongoose.model("review", reviewSchema);

module.exports = review;
