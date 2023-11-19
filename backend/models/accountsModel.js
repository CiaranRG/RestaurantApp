import Joi from 'joi';

// Creating a joi schema for a registration
const registerSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required()
});

// Creating a joi schema for logging in
const loginSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().required(),
});

export { registerSchema, loginSchema }