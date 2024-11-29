const express = require("express");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const { userModel, courseModel, purchaseModel, adminModel } = require("./db");
const mongoose = require("mongoose");

const app = express();

app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);

async function main() {
  await mongoose.connect(
    "mongodb+srv://tryahadabdulaa728:mn43XdK5cXEUp08K@cluster0.xntin.mongodb.net/courseller",
  );
  app.listen(3000);
  console.log("listning on port 3000");
}

main();
