// 在这个文件里，可以获取远程后端配置文件，例如 apollo，然后解析，获取对应的数据库信息。上线的时候运维只需要将配置文件替换成线上即可。

const Sequelize = require('sequelize')

module.exports = () => {
    return async (ctx, next) => {
        const options = {
            host: 'localhost',
            user: 'root',
            password: '12345678',
            port: '3306',
            database: 'RUNOOB'
        }

        const seq = new Sequelize('RUNOOB', options.user, options.password, {
            host: options.host,
            port: options.port,
            dialect: 'mysql',
            pool: {
                max: 10,
            }
        })
        ctx.sequelize = seq  // 挂载上下文，在表建模 时用到
        await next()
    }
}
