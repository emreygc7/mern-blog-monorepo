import { proxy } from "valtio";

const post = proxy({
  title: "",
  content: "",
  category: "",
  image: '',
  createdBy: "",
  comments: [],
})

export const postsStore = proxy({
  posts: [post],
});