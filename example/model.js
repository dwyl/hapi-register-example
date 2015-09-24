var Joi = require('joi');
var custom_fields = {
  email : Joi.string().email().required(),
  name  : Joi.string().alphanum().min(1).required()
};
module.exports = custom_fields;
