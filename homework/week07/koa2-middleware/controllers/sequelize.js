const Tutorial = require('../models/sequelize/tutorial')

module.exports = {
    create: async (ctx, next) => {
        try {
            const result = await Tutorials.create({
                title: ctx.query.title,
                desc: ctx.query.desc
            })
            ctx.body = result
        } catch (err) {
            ctx.body = err.message
        }
    },
    queryAll: async (ctx, next) => {
        try {
            const result = await Tutorial.findAll({ title: ctx.query.title })
            ctx.body = result
        } catch (err) {
            ctx.body = err.message
        }
    },
    deleteSome: async (ctx, next) => {
        try {
            const result = await Tutorial.destroy({
                where: { title: ctx.query.title }
            })
            ctx.body = result
        } catch (err) {
            ctx.body = err.message
        }
    },
    updateSome: async (ctx, next) => {
        try {
            const result = await Tutorial.update({ title: ctx.query.title }, {
                where: {
                    desc: ctx.query.desc
                }
            })
            ctx.body = result
        } catch (err) {
            ctx.body = err.message
        }
    }
}