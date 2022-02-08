const { User } = require('../db/db')
const bcrypt = require('bcryptjs')
const jwt = require ('jsonwebtoken')

module.exports = {
    createUser: async (req,res)=>{

        try {
            const { username, email, password } = req.body
            const user = await User.create({
                username:username,
                email:email,
                password:bcrypt.hashSync(password,10)
            })
            res.json({status:'Ok',results:user})
        } catch (error) {
            res.json({status:'Error',results:null, msg:'Parece que algunos datos ya estan en uso!'})
        }

    },
    login: async (req,res)=>{
        const { email, password } = req.body

        try {
            const user = await User.findOne({where:{email:email}})
            if(!user){
                return res.json({status:'Error',results:null, msg:'Algunos datos ingresados son invalidos!'})
            }
            const pass = bcrypt.compareSync(password,user.password)
            if(!pass){
                return res.json({status:'Error',results:null, msg:'Algunos datos ingresados son invalidos!'})
            }
            const token = jwt.sign({user:user}, 'top secret', {expiresIn: '24h'})
            req.session.user = user
            req.session.token = token
            res.json({status:'Ok',results:req.session})
            
        } catch (error) {
            res.json({status:'Error',results:null, msg:'Error de validación!'})
        }
    },
    logout: async (req,res)=>{
        
        try {
            if(req.session){
                req.session.destroy((err)=>{
                    if(err){
                        res.json('Unable to log out')
                    }else{
                        res.json({status:'Ok',results:'Logout successful'})
                    }
                })
            }
        } catch (error) {
            
            res.json({status:'Error',results:null, msg:'Ha ocurrido un error!'})
        }
    }
}