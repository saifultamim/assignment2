import Joi from 'joi'

const variantsSchema = Joi.object({
    type: Joi.string().required(),
    value: Joi.string().required()
   })
   const inventorySchema = Joi.object({
    quantity: Joi.number().required(),
    inStock: Joi.boolean().required()
   })
    const joiProductSchema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().required().min(1),
        category: Joi.string().required(),
        tags: Joi.array()
        .items(Joi.string())   
        .required(),
        variants: Joi.array().items(variantsSchema).required(),
          inventory:inventorySchema.required()
          /*inventory:inventorySchema.required().messages({
            'inventory':'hello inventory',
          })*/

    })
export default  joiProductSchema
