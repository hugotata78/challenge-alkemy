const { Record } = require('../db/db')

module.exports = {
    createRecord: async (req,res)=>{
        const { concept, amount, typeOperation, date } = req.body
        const { userId } = req.params

        try {
            const record = await Record.create({
                concept:concept,
                amount:amount,
                typeOperation:typeOperation,
                date:date,
                userId:userId
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
                }
            })
            res.json(records)
        } catch (error) {
            res.json(error.message)
        }
    },

    updateRecord: async (req,res)=>{
        const { id } = req.params
        try {
            await Record.update(req.body,{
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
    }
}