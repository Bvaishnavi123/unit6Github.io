const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded());

//Model and schema

const UserSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
//Routes
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  User.findOne({email:email},(err,user)=>{
    if(user){
      if(password==user.password){
        res.send({message:"Login Successfully",user:user})
      }else{
        res.send({message:"Invalid Password"})
      }
    }else{
      res.send({message:"User is not Registerd"})
    }
  })
});

const User = mongoose.model("User", UserSchema);
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already exist" });
    } else {
      const user = new User({
        name,
        email,
        password,
      });
      user.save(err => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Register" });
        }
      });
    }
  });
});

module.exports = app;
