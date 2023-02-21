import Joi from 'joi';

export const insert = Joi.object({
    nickname: Joi.string().required(),
    idSocket: Joi.string().required(),
    createDate: Joi.date().required(),
});