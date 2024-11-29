const { Router } = require("express");

const courseRouter = Router();

courseRouter.post("/purchase", function(req, res) {
  res.json({
    msg: "purchase endpoint",
  });
});

courseRouter.post("/preview", function(req, res) {
  res.json({
    msg: "preview endpoint",
  });
});

module.exports = {
  courseRouter: courseRouter,
};
