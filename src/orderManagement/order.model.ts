import { TOrder } from "./order.interface";
import { Schema, model } from "mongoose";


const orderSchema = new Schema<TOrder>({
   email:{type:String,required:[true,'email is required']},
    productId:{type:String,required:[true,'productId is required']},
    price:{type:Number,required:[true,'price is required']},
    quantity:{type:Number,required:[true,'quantity is required']},
})

export const OrderModel = model<TOrder>('order',orderSchema)