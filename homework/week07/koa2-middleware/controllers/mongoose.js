const User = require('../models/mongoose/user')
module.exports = {
    create: async (ctx, next) => {
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
    }
}