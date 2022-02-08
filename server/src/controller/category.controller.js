const { Category } = require('../db/db')

const auxFunction = async (model, name)=>{
    const item = await model.create({
        name:name
    })
    return item
}

module.exports = {
    createCategories: async (req,res)=>{
        const categories = ['comidas y bebidas','indumentaria y calzados','ocio','viajes y turismo','servicios','otros']
        try {
            const response = await Promise.all(categories.map(c=>{
                return auxFunction(Category,c)
            }))
            res.json(response)
        } catch (error) {
            res.json(error.message)
        }
    },
    getCategories: async (req,res)=>{
        try {
            const categories = await Category.findAll()
            res.json(categories)
        } catch (error) {
            res.json(error.message)
        }
    }
}