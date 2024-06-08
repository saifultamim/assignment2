import express, { NextFunction, Request, Response } from 'express'
import router from './productManagement/product.router'
import orderrouter from './orderManagement/order.routesr'
import httpStatus from 'http-status';
const app = express()
app.use(express.json())

app.use('/api/products',router)
app.use('/api/orders',orderrouter)
app.get('/', (req, res) => {
  res.status(200).json({
    data:'hello world'
  })
})
//Api not found handle
app.use((req:Request,res:Response,next:NextFunction)=>{
  return res.json({
    success:false,
    message:'Api not found'
  })
})
export default app;
