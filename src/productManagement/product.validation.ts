//import Joi from 'joi'
import { z } from "zod"

// Variants Validation
const VariantsValidation = z.object({
  type: z.string().min(1, 'Variant type is required'),
  value: z.string().min(1, 'Variant value is required'),
});

// Inventory Validation
const InventoryValidation = z.object({
  quantity: z.number().min(0, 'Inventory quantity is required'),
  inStock: z.boolean(),
});

// Product Validation
const productValidation = z.object({
  name: z.string().min(1, 'Product name is required'),
  description: z.string().min(1, 'Product description is required'),
  price: z.number().min(0, 'Product price is required'),
  category: z.string().min(1, 'Product category is required'),
  tags: z.array(z.string()).min(1, 'Product tags are required'),
  variants: z.array(VariantsValidation).min(1, 'Product variants are required'),
  inventory: InventoryValidation,
});

export default  productValidation;

/*
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
          })

    })*/
    
//export default  joiProductSchema
