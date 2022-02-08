const Sequelize = require('sequelize')
const modelUser = require('../model/User')
const modelRecord = require('../model/Record')
const modelCategory = require('../model/Category')

const sequelize = new Sequelize('alkemy_db','root','',{
    host:'localhost',
    dialect:'mysql'
})

const User = modelUser(sequelize,Sequelize)
const Record = modelRecord(sequelize,Sequelize)
const Category = modelCategory(sequelize,Sequelize)

//associations
User.hasMany(Record)
Record.belongsTo(User)

Category.hasMany(Record)
Record.belongsTo(Category)

const categories = ['comidas y bebidas','indumentaria y calzados','ocio','viajes y turismo','servicios','otros']

sequelize.sync({ force: false })
.then(_=>{
    console.log('Synchronization with db successful')
})

module.exports = {
    User,
    Record,
    Category
}