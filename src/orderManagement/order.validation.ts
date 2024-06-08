import Joi from 'joi'
import { z } from 'zod';
const zodOrderSchema = z.object({
    email: z.string().email({ message: 'Invalid Email' }),
    productId: z.string(),
    price: z.number().int().positive({ message: 'Price must be  positive integer' }),
    quantity: z.number().int().nonnegative({ message: 'Quantity must be  non-negative integer' }),

})

export default  zodOrderSchema