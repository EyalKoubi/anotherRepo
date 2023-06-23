import Joi from "joi";

/**
 * Schema for validating user inputs.
 */
export const userInputsSchema = Joi.object({
  user_name: Joi.string().required(),
  password: Joi.string().required(),
});

/**
 * Schema for validating quiz objects.
 */
export const quizsSchema = Joi.object({
  question: Joi.string().required(),
  options: Joi.array().items(Joi.string()).length(4).required().messages({
    "array.base": "options must be an array",
    "array.length": "options must contain exactly 4 elements",
  }),
  correct: Joi.number().integer().min(1).max(4).required(),
});
