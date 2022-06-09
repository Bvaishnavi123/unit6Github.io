const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    category :{type:String,required:true},
    subCategory : [{type:String,required:true}]
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const category = mongoose.model("category", categorySchema);

module.exports = category;
