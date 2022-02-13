const { User } = require('../db/db')
const jwt = require('jsonwebtoken')

const Auth = async (req, res, next) => {

    try {
        const strToken = req.headers['authorization']

        if (!strToken) {
            return res.json('Invalid token!')
        }


        const token = strToken.split(' ')[1]
        const topSecret = 'top secret'
        const key = jwt.verify(token, topSecret, async (err, decoded) => {
            if (err) {
                if(req.session){
                    req.session.destroy((err)=>{
                        if(err){
                            res.json('Unable to log out')
                        }else{
                            res.json({status:'Ok',results:'Logout successful'})
                        }
                    })
                }
            } else {
                const user = await User.findAll({ where: { id: decoded.user.id } })
                if (!user) {
                    return res.json('User not found')
                }
                next()
            }
        })

    } catch (error) {
        res.json(error.message)
    }
}

module.exports = Auth