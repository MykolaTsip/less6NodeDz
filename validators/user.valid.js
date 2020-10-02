const Joi = require('joi')

module.exports = Joi.object().keys({
    name: Joi.string().alphanum().min(2).max(50).trim().required(),
    password: Joi.string().trim().min(6).max(50).required()
})
