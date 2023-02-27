import Category from "../models/categories.js";


const createCategory = async (req, res, next) => {
  const newCategory = new Category(req.body);
  try {
    await newCategory.save();
    res.status(201).json(newCategory);
    next();
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
}

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  try {
    await Category.findByIdAndRemove(id);
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    await Category.findByIdAndUpdate(id, { name });
    res.status(200).json({ message: "Category updated successfully" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}




export {
  getCategories,
  createCategory, 
  deleteCategory,
  updateCategory
}