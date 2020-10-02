
module.exports = class ErrorHandle extends Error{
    constructor(message, code, customCode) {
        super(message);
        this.code = code
        this.custonCode = customCode

        Error.captureStackTrace(this, this.constructor)
    }

}
