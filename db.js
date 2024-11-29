const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;
console.log("connected to db");
mongoose.connect(
  "mongodb+srv://tryahadabdulaa728:mn43XdK5cXEUp08K@cluster0.xntin.mongodb.net/courseller",
);

const userSchema = new Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
});

const courseSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  imageURL: String,
  creatorId: ObjectId,
});

const adminSchema = new Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
});

const purchaseSchema = new Schema({
  courseId: ObjectId,
  userId: ObjectId,
});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);
const courseModel = mongoose.model("course", courseSchema);

module.exports = {
  userModel,
  adminModel,
  purchaseModel,
  courseModel,
};
