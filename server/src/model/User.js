module.exports = (sequelize, type)=>{
    return sequelize.define('user', {
        id:{
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        username:{
            type:type.STRING,
            allowNull:false,
            unique:true
        },
        email:{
            type:type.STRING,
            allowNull:false,
            unique:true
        },
        password:{
            type:type.STRING(150),
            allowNull:false,
        }
    })
}

