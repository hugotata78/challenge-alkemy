const Sequelize = require('sequelize')
const modelUser = require('../model/User')
const modelRecord = require('../model/Record')

const sequelize = new Sequelize('alkemy_db','root','',{
    host:'localhost',
    dialect:'mysql'
})

const User = modelUser(sequelize,Sequelize)
const Record = modelRecord(sequelize,Sequelize)

//associations
User.hasMany(Record)
Record.belongsTo(User)

sequelize.sync({ force: false })
.then(_=>{
    console.log('Synchronization with db successful')
})

module.exports = {
    User,
    Record
}