const Joi = require('joi');

const postSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  category: Joi.string().required(),
});

module.exports = { postSchema };
