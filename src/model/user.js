const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        Uinque:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:'user',
        enum:['admin','user']
    }
},{timestamps:true})


userSchema.pre('save',async function(next){
    const user=this;
    const salt=await bcrypt.genSalt(10)
    const plainPassword=user.password.toString()
    const encryptedPassword=bcrypt.hashSync(plainPassword,salt)
    user.password=encryptedPassword
    next()
})

userSchema.methods.comparePassword=function compare(password){
    return bcrypt.compareSync(password,this.password)
}

userSchema.methods.genJWT=function generate(){
    return jwt.sign({id:this._id,email:this.email},'secret',{expiresIn:'1d'})
}


const User=mongoose.model('User',userSchema)
module.exports=User;