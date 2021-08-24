const { Sequelize } = require('sequelize');
const test = require('../models/sequelize');

// 增加

const create = function (seq) {
    const UserModel = test(seq)
    // UserModel.sync(); 第一次使用， 并将下面的创建注释掉，第二次，打开创建， 这行是新建表
    UserModel.create({
        name: '',
        age: 1,
        sex: 'male',
    }).then(res => {
        console.log('创建', JSON.parse(JSON.stringify(res)));
    })
}

// 删除

const deleteItem = function (seq, ctx) {
    const id = ctx.params.id
    const UserModel = test(seq)
    UserModel.destroy({
        where: {
            id: id
        }
    }).then(() => {
        console.log('删除', `id: ${id}`)
    })
}

// 获取所有信息
const getInfo = function (seq, ctx) {
    return new Promise((resolve, reject) => {
        const UserModel = test(seq)
        UserModel.findAll().then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}


module.exports = {
    create,
    deleteItem,
    getInfo,
}
