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

const getUser = async (req, res) => {
  try {
    const { id } = req.params
    console.log(req.params);
    const user = await User.findById(id)
    console.log(user);
    if (user) {
      return res.status(200).json(user)
    }
    return res.status(404).send('User not found')
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await User.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('User deleted')
    }
    throw new Error('User not found')
  } catch (error) {
    console.error(error)
    res.status(500).send(error.message)
  }
}




export {
  getAllUsers,
  createUser,
  deleteUser,
  getUser
}