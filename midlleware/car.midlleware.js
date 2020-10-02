const {carValid} = require('../validators')
const {ErrorEnum, ErrorStatusEnum, ErrorHandle} = require('../error')

module.exports = async (req, res, next) => {
    try {
      const carObj = req.body

        let {error} =  await carValid.validate(carObj)

        if (error) {
            return next(new ErrorHandle(
                ErrorEnum.NOT_VALID_CAR.message,
                ErrorStatusEnum.NOT_CAR,
                ErrorEnum.NOT_VALID_CAR.customCode
            ))
        }

        next()
    }
    catch (e) {
        next(e)
    }
}
