import mongoose from "mongoose";
import bycrpt from "bcrypt";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 15,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/, "Please enter a valid e-mail address"],
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
    maxlength: 15,
  },
  profile_pic:{
    type: String,
    default: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg",
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
});


userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bycrpt.genSalt(10);
  this.password = await bycrpt.hash(this.password, salt);
});




const User = mongoose.model('User', userSchema);

export default User;