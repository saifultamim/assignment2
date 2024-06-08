import express from 'express'
import { productController } from './product.controller'

const router = express.Router()

router.post('/',productController.newProductCreate)
router.get('/',productController.getAllProducts)
router.get('/:productId',productController.specificProductById)
router.put('/:productId',productController.specificUpdateProduct)
router.delete('/:productId',productController.specificDeleteProduct)
export default router


