const {Router} = require('express')
const {userController} = require('../controllers')
const   {userMidlleware, userLoginMidlleware} = require('../midlleware')

const userRouter = Router();

userRouter.get('/', userController.AllUsers)
userRouter.post('/new',userMidlleware,  userController.NewUser)
userRouter.post('/login', userLoginMidlleware ,userController.Login)

module.exports = userRouter
