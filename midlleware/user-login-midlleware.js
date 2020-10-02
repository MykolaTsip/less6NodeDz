const {ErrorHandle, ErrorStatusEnum, ErrorEnum} =require('../error')
const {userService} = require('../services')

module.exports = async (req, res, next) => {
    try {
      const {name} = req.body

        const user =  await userService.findUserByParams({name})

        if (!user) {
            return next(new ErrorHandle(
                ErrorEnum.NOT_VALID_USER.message,
                ErrorStatusEnum.NOT_USER,
                ErrorEnum.NOT_VALID_USER.customCode
            ))
        }

        req.user = user
        next()
    }
    catch (e) {
        next(e)
    }
}
