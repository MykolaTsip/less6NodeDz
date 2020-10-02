const bcrypt = require('bcrypt')
const {ErrorEnum, ErrorStatusEnum, ErrorHandle} = require('../error')

module.exports = async (password, hashPass) => {
    const isCompare = bcrypt.compare(password, hashPass)

    if (!isCompare) {
        return
        throw new ErrorHandle(
            ErrorEnum.NOT_VALID_USER.message,
            ErrorStatusEnum.NOT_USER,
            ErrorEnum.NOT_VALID_USER.customCode
        )
    }
    return isCompare
}
