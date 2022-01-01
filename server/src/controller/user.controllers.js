const { User } = require('../db/db')
const bcrypt = require('bcryptjs')
const jwt = require ('jsonwebtoken')

module.exports = {
    createUser: async (req,res)=>{

        const { username, email, password } = req.body
        try {
            const user = await User.create({
                username:username,
                email:email,
                password:bcrypt.hashSync(password,10)
            })
            res.json(user)
        } catch (error) {
            res.json(error.message)
        }

    },
    login: async (req,res)=>{
        const { email, password } = req.body

        try {
            const user = await User.findOne({where:{email:email}})
            if(!user){
                return res.json('Invalid data')
            }
            const pass = bcrypt.compareSync(password,user.password)
            if(!pass){
                return res.json('Invalid data')
            }
            const token = jwt.sign({user:user}, 'top secret', {expiresIn: '1h'})
            res.json(token)
            
        } catch (error) {
            res.json(error.message)
        }
    }
}