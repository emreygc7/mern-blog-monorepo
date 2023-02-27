import mongoose from "mongoose";


const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Category = mongoose.model("Category", categorySchema);

export default Category;