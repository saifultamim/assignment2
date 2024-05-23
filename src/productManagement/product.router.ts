import express from 'express'
import { productController } from './product.controller'

const router = express.Router()

router.post('/api/products',productController.newProductCreate)
router.get('/api/products',productController.getAllProducts)
router.get('/api/products/:productId',productController.specificProductById)
router.put('/api/products/:productId',productController.specificUpdateProduct)
router.delete('/api/products/:productId',productController.specificDeleteProduct)
export default router



