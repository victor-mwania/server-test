const Joi = require("joi");

const profileSchema = Joi.obect({
    name: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

    description: Joi.string()
    .min(3)
    .max(200)
    .required(),

    mbti: Joi.string()
    .min(4)
    .max(4)
    .required(),                   

    enneagram: Joi.string()
    .min(3)
    .max(3)
    .required(),                   

    variant: Joi.string()
    .min(1)
    .max(6)
    .required(),                   

    tritype: Joi.number()
    .integer()
    .required(),                  

    socionics: Joi.string()
    .min(3)
    .max(3),                   

    sloan: Joi.string()
    .min(5)
    .max(5),                   

    psyche: Joi.string()
    .min(4)
    .max(4),                   

    image: Joi.string()
    .uri()
    .min(10)
    .max(200)       

});

module.export = {
    profileSchema
}