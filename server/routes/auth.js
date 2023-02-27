import express from 'express'
import validator from '../middlewares/validator.js'
import usersValidation from '../validations/users.validation.js'
import { login } from '../controllers/auth.js'


const router = express.Router()

router.route('/login').post(validator(usersValidation.login), login)



export default router