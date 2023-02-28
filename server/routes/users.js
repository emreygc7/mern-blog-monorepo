import express from 'express'
import validator from '../middlewares/validator.js'
import usersValidation from '../validations/users.validation.js'
import { createUser, getAllUsers, deleteUser, getUser } from '../controllers/users.js'

const router = express.Router()

router.route('/').post(validator(usersValidation.create), createUser).get(getAllUsers)

router.route('/:id').get(getUser).delete(deleteUser)



export default router