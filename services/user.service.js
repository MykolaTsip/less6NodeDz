const model = require('../database').getInstance()

module.exports = {
    allUser: async () => {
        let users = model.getModels('User')
        return users.findAll({})

    },

    newUser: async (userObj) => {
        let newUser = model.getModels('User')
        return newUser.create(userObj, {new: true})
    },
    findUserByParams:  (obj) => {
        let user = model.getModels('User')
        return user.findOne({
            where: obj
        })
    }

}
