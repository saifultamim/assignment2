
import { productModel } from "../productManagement/product.model"
import { TOrder } from "./order.interface"
import { OrderModel } from "./order.model"



const orderCreate = async(payLoad : TOrder) => {
  const productQuantity = await productModel.find({},{'inventory.quantity':1})
  if(productQuantity[0].inventory.quantity>0){
    const result = await OrderModel.create(payLoad)
  if(result){
    const quantityFinds = await productModel.find({},{'inventory.quantity':1})
    const updateQuantity = quantityFinds[0].inventory.quantity - payLoad.quantity
    if(updateQuantity>=0){
      await productModel.updateMany({},{ $set: { 'inventory.quantity': updateQuantity } })
      if(updateQuantity<=0){
        await productModel.updateMany({},{ $set: { 'inventory.inStock': false } })
      }
    }
  }
    return result
  }
  else{
    throw new Error('Insufficient quantity available in inventory')
  }
}

const orderFind = async() => {
  const result = await OrderModel.find({})
  return result
}
const orderByUserEmail = async(searchItem:string) => {
  const result = await OrderModel.find({email:searchItem})
  return result
}

export const orderService = {
  orderCreate,
  orderFind,
  orderByUserEmail,
}