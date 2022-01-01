module.exports = (sequelize,type)=>{
    return sequelize.define('record',{
        id:{
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        concept:{
            type:type.STRING,
            allowNull:false, 
        },
        amount:{
            type:type.INTEGER,
            allowNull:false,
        },
        typeOperation:{
            type:type.INTEGER,
            allowNull:false,
        },
        date:{
            type:type.DATE,
            allowNull:false,
        }
    })
}