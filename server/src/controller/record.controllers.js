const { Record, Category } = require('../db/db')

module.exports = {
    createRecord: async (req,res)=>{
        const { concept, amount, operation, date, categoryId } = req.body
        const { userId } = req.params

        try {
            const record = await Record.create({
                concept:concept,
                amount:amount,
                operation:operation,
                date:date,
                userId:userId,
                categoryId:categoryId
            })
            res.json(record)
        } catch (error) {
            res.json(error.message)
        }
    },

    getRecords: async (req, res)=>{
        const { userId } = req.params

        try {
            const records = await Record.findAll({
                where:{
                    userId:userId
                },
                include:{
                    model:Category,
                }
            })
            res.json(records)
        } catch (error) {
            res.json(error.message)
        }
    },

    getRecord: async (req, res)=>{
        const { id } = req.params

        try {
            const record = await Record.findOne({
                where:{
                    id:id
                },
                include:{
                    model:Category,
                }
            })
            res.json(record)
        } catch (error) {
            res.json(error.message)
        }
    },


    updateRecord: async (req,res)=>{
        const { id } = req.params
        const { concept, amount, operation, date, userId, categoryId } = req.body
        try {
            await Record.update({
                concept:concept,
                amount:amount,
                operation:operation,
                date:date,
                userId:userId,
                categoryId:categoryId
            },{
                where:{
                    id:id
                }
            })
            res.json('Success')
        } catch (error) {
            res.json(error.message)
        }
    },
    deleteRecord: async (req,res)=>{

        const { id } = req.params

        try {
            await Record.destroy({
                where:{
                    id:id
                }
            })
            res.json('success')
        } catch (error) {
            res.json(error.message)
        }
    },
    filterRecords: async (req,res)=>{
        const {userId,categoryId} = req.params

        try {
            const records = await Record.findAll({
                where:{
                    userId:userId,
                    categoryId:categoryId
                },
                include:{
                    model:Category,
                }
            })
            const category = await Category.findOne({
                where:{
                    id:categoryId
                }
            })
            res.json({category:category,data:records})
        } catch (error) {
            res.json(error.message)
        }
    }
}