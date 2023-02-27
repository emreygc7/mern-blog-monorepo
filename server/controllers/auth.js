import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '../models/users.js'



const login = async (req, res) => {
  const { username, password } = req.body
  try{
    const user = await User.findOne({ username })
    let isValid = false
    if(user){
      isValid = await bcrypt.compare(password, user.password)
    } else {
      return res.status(401).json({
        message:'User not found'})
    }
    if(!isValid) return res.status(401).json({
      message: 'Invalid password'
    })
    const token = jwt.sign({ id: user._id, username: user.username, profile_pic: user.profile_pic, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '1d' })
    res.status(200).json({ token })
  } catch (error) {
    console.error(error)
    res.status(500).send(error.message)
  }
}

export {
  login
}