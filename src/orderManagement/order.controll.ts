import { Request, Response } from "express"
import { orderService } from "./order.service"
import zodOrderSchema from "./order.validation"


//===============orderCreate===============================
const orderCreate = async(req:Request,res:Response)=>{
   
    try{
  const orderData = req.body
  const validateData=zodOrderSchema.parse(orderData)
     const result = await orderService.orderCreate(validateData)
 res.json({
  success:true,
  message: "Order created successfully!",
  data:result
 })
    }catch(error : any){
      res.json({
        "success": false,
        "message": error.message
    })
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