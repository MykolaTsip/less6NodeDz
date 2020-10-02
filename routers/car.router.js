const {Router} = require('express')
const {carController} = require('../controllers')
const carMidlleware = require('../midlleware/car.midlleware')

const carRouter = Router();

carRouter.get('/', carController.AllCar)
carRouter.post('/new', carMidlleware, carController.NewCar)


module.exports = carRouter
