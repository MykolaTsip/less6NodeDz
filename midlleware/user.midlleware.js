const {ErrorHandle, ErrorStatusEnum, ErrorEnum} = require('../error')
const {userValid} = require('../validators')


module.exports = (req, res, next) => {
    try {
        let user = req.body

        const {error} = userValid.validate(user)

        if (error) {
            return next(new ErrorHandle(
                ErrorEnum.NOT_VALID_USER.message,
                ErrorStatusEnum.NOT_USER,
                ErrorEnum.NOT_VALID_USER.customCode
            ))
        }

        next()
    }
    catch (e) {
        next(e)
    }
}
