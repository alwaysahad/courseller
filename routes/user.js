const { Router } = require("express");
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "users3cr3t";
const userModel = require("../db");

const userRouter = Router();

userRouter.post("/signup", async function (req, res) {
  const { email, password, firstName, lastName } = req.body;

  try {
    await userModel.create({
      email,
      password,
      firstName,
      lastName,
    });
  } catch (e) {}

  res.json({
    msg: "signup success",
  });
});

userRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;

  const user = await userModel.find({
    email: email,
    password: password,
  });

  if (user) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_USER_PASSWORD,
    );

    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      msg: "Access denied",
    });
  }
  res.json({
    msg: "signin endpoint",
  });
});

userRouter.get("/purchases", function (req, res) {
  res.json({
    msg: "purchase endpoint",
  });
});

module.exports = {
  userRouter: userRouter,
};
