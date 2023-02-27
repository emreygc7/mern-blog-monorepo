import express from 'express';
import { getCategories, createCategory, deleteCategory, updateCategory } from '../controllers/categories.js';
import categoriesValidation from '../validations/categories.validation.js';
import validator from '../middlewares/validator.js';

const router = express.Router();

// router.get('/', getCategories);
// router.post('/', createCategory);

router.route('/').post(validator(categoriesValidation.create), createCategory).get(getCategories)

router.route('/:id').delete(deleteCategory).put(validator(categoriesValidation.update), updateCategory);


export default router;