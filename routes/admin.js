const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");

adminRouter.post("/signup", function(req, res) {
  res.json({
    msg: "signup endpoint",
  });
});

adminRouter.post("/signin", function(req, res) {
  res.json({
    msg: "signin endpoint",
  });
});

adminRouter.get("/bulk", function(req, res) {
  res.json({
    msg: "bulk endpoint",
  });
});

adminRouter.put("/", function(req, res) {
  res.json({
    msg: "course endpoint",
  });
});

adminRouter.post("/", function(req, res) {
  res.json({
    msg: "course endpoint",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
