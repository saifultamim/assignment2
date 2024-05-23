import { TProduct } from "./product.interface"
import { productModel } from "./product.model"



const newProductCreate = async (payLoad:TProduct) =>{
    const result = await productModel.create(payLoad)
    return result
}

const getAllProducts = async() => {
    const result = await productModel.find({})
    return result
}

const specificProductById = async(id:string) => {
    const result = await productModel.findById(id)
    return result
}

const specificUpdateProduct = async(id:string,productData:TProduct) => {
    const result = await productModel.updateOne(
        {_id:id},   
        {$set:productData}
    )
    if(result.acknowledged){
        const specificUpdateProductById = await specificProductById(id)
        return specificUpdateProductById
    }
    else{
        return 'Product updated is not successfully'
    }   
}

const specificDeleteProduct = async(id:string) => {
    const result = await productModel.deleteOne({_id:id})
    if(result.acknowledged){
        return null
    }
    return 'Product deleted is not successfully!'
}

const searchProduct = async(searchItem:string) => {
    const findProduct = searchItem.charAt(0) + searchItem.charAt(1).toUpperCase() + searchItem.slice(2);
    const result = await productModel.find({name:{ $regex: findProduct}})
    return result
}
export const productService = {
    newProductCreate,
    getAllProducts,
    specificProductById,
    specificUpdateProduct,
    specificDeleteProduct,
    searchProduct,

}

