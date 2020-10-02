const {userService} = require('../services')
const {heshPass, Compare} = require('../helper')

module.exports = {
    AllUsers: async (req, res) => {
        try {
            let users = await userService.allUser()
            res.json(users)
        } catch (e) {
            console.log(e)
        }
    },
    NewUser: async  (req, res) => {
        try {
           let users = req.body
            users.password = await heshPass(req.body.password)
            let Newuser = await userService.newUser(users)
        res.json(Newuser)
        }
        catch (e) {
            console.log(e)
        }
    },
    Login: async (req, res) => {
try {
    const user = req.user
    const {password} = req.body
    await Compare(password, user.password)
res.json('user true')

}
catch (e) {
    console.log(e)
}
    }
}
