const { Router } = require("express");
const adminRouter = Router();

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

adminRouter.get("/course/bulk", function(req, res) {
  res.json({
    msg: "bulk endpoint",
  });
});

adminRouter.put("/course", function(req, res) {
  res.json({
    msg: "course endpoint",
  });
});

adminRouter.put("/course", function(req, res) {
  res.json({
    msg: "course endpoint",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
