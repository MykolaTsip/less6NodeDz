const Joi = require('joi')

module.exports = Joi.object().keys({
    model: Joi.string().trim().alphanum().min(2).max(50).required(),
    year: Joi.number().min(4).max(4).required(),
    price: Joi.number().max(7).min(3).required()
})
