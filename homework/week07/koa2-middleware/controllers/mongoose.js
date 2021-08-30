const User = require('../models/mongoose/user')
module.exports = {
    create: async (ctx, next) => {
        console.log('mongoose:', ctx.query.title, ctx.query.desc)
        try {
            const user = new User({
                username: ctx.query.username,
                age: ctx.query.age
            })
            const result = await user.save()
            ctx.body = result
        } catch (err) {
            ctx.body = err.message
        }
    },
    queryAll: async (ctx, next) => {
        try {
            const result = await User.find({ username: ctx.query.username })
            ctx.body = result
        } catch (err) {
            ctx.body = err.message
        }
    },
    deleteSome: async (ctx, next) => {
        try {
            const result = await User.remove({ age: ctx.query.age })
            ctx.body = result
        } catch (err) {
            ctx.body = err.message
        }
    },
    updateSome: async (ctx, next) => {
        try {
            const result = await User.findOneAndUpdate({ age: ctx.query.age }, { age: '2000000000000' })
            ctx.body = result
        } catch (err) {
            ctx.body = err.message
        }
    }
}