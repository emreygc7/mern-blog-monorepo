import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  content: String,
  img: String,
  created_by: String,
  created_at: {
    type: Date,
    default: new Date(),
  },
})

const Post = mongoose.model('Post', postSchema);

export default Post;