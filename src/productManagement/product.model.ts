import { Schema, model } from "mongoose";
import { TInventory, TProduct, TVariants } from "./product.interface";

const variantsSchema = new Schema<TVariants>({
    type: {type:String,required:[true,'type is required']},
    value: {type:String,required:[true,'value is required']},
})

const inventorySchema = new Schema<TInventory>({
    quantity: {type:Number,required:[true,'quantity is required']},
    inStock: {type:Boolean,required:[true,'inStock is required']}
})

const productSchema = new Schema<TProduct>({
    name:{type:String,required:[true,'name is required']},
    description:{type:String,required:[true,'descripton is required']},
    price:{type:Number,required:[true,'price is required']},
    category:{type:String,required:[true,'category is required']},
    tags:{type:[String],required:[true,'tags is required']},
    variants:{type:[variantsSchema],required:[true,'variants is required']},
   inventory:{type:inventorySchema,required:[true,'inventory is required']}
})

export const productModel = model<TProduct>('product',productSchema)