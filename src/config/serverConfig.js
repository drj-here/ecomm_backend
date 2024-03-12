const dotenv=require('dotenv')
dotenv.config()
const bcrypt=require('bcrypt')

module.exports={
    PORT:process.env.PORT,
    MONGODB_URI:process.env.MONGODB_URI,
    JWT_KEY:process.env.JWT_KEY,
    SALT:bcrypt.genSalt(10)
}