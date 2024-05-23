import express from 'express'
import { orderController } from './order.controll'

const orderrouter = express.Router()

orderrouter.post('/api/orders',orderController.orderCreate)   
orderrouter.get('/api/orders',orderController.orderFind)
export default orderrouter
