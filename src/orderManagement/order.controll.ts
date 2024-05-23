import { Request, Response } from "express"
import { orderService } from "./order.service"
import joiOrderSchema from "./order.validation"


//===============orderCreate===============================
const orderCreate = async(req:Request,res:Response)=>{
   
    try{
  const orderData = req.body
  const {error}=joiOrderSchema.validate(orderData)
  if(error){
      return res.json({
          success:false,
          message:'order  is not correct validation',
          data:error.details
      })
  }
     const result = await orderService.orderCreate(orderData)
 res.json({
  success:true,
  message: "Order created successfully!",
  data:result
 })
    }catch(error){
      console.log(error)
    }
}



//=========================orderFind==================================
const  orderFind = async(req:Request,res:Response)=>{
    const searchItem = req.query.email
   try{
     if(searchItem){
       const result = await orderService.orderByUserEmail(searchItem as string)
       return res.json({
         success: true,
         message: "Orders fetched successfully for user email!",
         data:result
       })
     }
     else{
       const result = await orderService.orderFind()
       res.json({
         success:true,
         message: "Orders fetched successfully!",
             data:result
          })
     }

   }catch(error){
     console.log(error)
   }
}


export const orderController ={
   orderCreate,
   orderFind,
}