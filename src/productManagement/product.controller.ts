import { Request, Response } from "express"
import { productService } from "./product.service"
import joiProductSchema from "./product.validation"

//======================newProductCreate===========================
const newProductCreate = async(req:Request,res:Response)=>{
   
      try{
    const productData = req.body
    const {error}=joiProductSchema.validate(productData)
    if(error){
        res.json({
            success:false,
            message:'Product Data in not correct validation',
            data:error.details
        })
    }
       const result = await productService.newProductCreate(productData)
   res.json({
    success:true,
    message: "Product created successfully!",
    data:result
   })
      }catch(error){
        console.log(error)
      }
}
//==================getAllProducts==========================================
const  getAllProducts = async(req:Request,res:Response)=>{
     const searchItem = req.query.searchTerm
    try{
      if(req.query.searchTerm){
        const result = await productService.searchProduct(searchItem as string)
        return res.json({
          success: true,
          message: "Products matching search term 'iphone' fetched successfully!",
          data:result
        })
      }
      else{
        const result = await productService.getAllProducts()
        res.json({
          success:true,
          message: "Products fetched successfully!",
              data:result
           })
      }

    }catch(error){
      console.log(error)
    }
}
//=================================specificProductById============================
const specificProductById = async(req:Request,res:Response)=>{
 
    try{
        const {productId}=req.params
    const result = await productService.specificProductById(productId)
    res.json({
   success:true,
   message: "Products fetched successfully!",
   data:result
    })
    }catch(error){
      console.log(error)
    }
}
//===============================specificUpdateProduct============================
const specificUpdateProduct = async(req:Request,res:Response)=>{
   
    try{
        const {productId}=req.params
        const productData=req.body
    const result = await productService.specificUpdateProduct(productId,productData)
   res.json({
   success:true,
    message: "Product updated successfully!",
     data:result
   })
    }catch(error){
      console.log(error)
    }
}


//=================================sspecificDeleteProduct============================
const specificDeleteProduct = async(req:Request,res:Response)=>{
   
    try{
        const {productId}=req.params
    const result = await productService.specificDeleteProduct(productId)
    res.json({
   success:true,
   message: "Product deleted successfully!",
   data:result
    })
    }catch(error){
      console.log(error)
    }
}



export const productController ={
    newProductCreate,
    getAllProducts,
    specificProductById,
    specificUpdateProduct,
    specificDeleteProduct,
 
}