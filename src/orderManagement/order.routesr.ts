import express from 'express'
import { orderController } from './order.controll'

const orderrouter = express.Router()

orderrouter.post('/',orderController.orderCreate)   
orderrouter.get('/',orderController.orderFind)
export default orderrouter