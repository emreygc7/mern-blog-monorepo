import User from '../models/users.js'


const createUser = async (req, res) => {
  try {
    const usernameExists = await User.findOne({ username: req.body.username })
    const emailExists = await User.findOne({ email: req.body.email })
    if(usernameExists) return res.status(400).send('Username already exists')
    if(emailExists) return res.status(400).send('Email already exists')
    const user = await User.create(req.body)
    res.status(201).json(user)
  } catch (error) {
    console.error(error)
    res.status(500).send(error.message)
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (error) {
    console.error(error)
    res.status(500).send(error.message)
  }
}



export {
  createUser,
  getAllUsers,
}