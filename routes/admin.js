const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");
const { z } = require("zod");

adminRouter.post("/signup", function (req, res) {
  const requiredBody = z.object({
    email: z.string().email().min(6).max(50),
    password: z.string().min(4).max(50),
    firstName: z.string(),
    lastName: z.string(),
  });

  const parsedDataWithSuccess = requiredBody.safeParse(req.body);

  if (!parsedDataWithSuccess.success) {
    res.json({
      msg: "something went wrong",
      err: parsedDataWithSuccess.error,
    });
    return;
  }

  const email = req.body.email;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastname;

  res.json({
    msg: "signup endpoint",
  });
});

adminRouter.post("/signin", function (req, res) {
  const requiredBody = z.object({
    email: z.string(),
    password: z.string(),
  });
  res.json({
    msg: "signin endpoint",
  });
});

adminRouter.get("/course/bulk", function (req, res) {
  res.json({
    msg: "bulk endpoint",
  });
});

adminRouter.put("/course", function (req, res) {
  res.json({
    msg: "course endpoint",
  });
});

adminRouter.post("/course", function (req, res) {
  res.json({
    msg: "course endpoint",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
