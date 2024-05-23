import express from 'express'
import router from './productManagement/product.router'
import orderrouter from './orderManagement/order.routesr'
const app = express()
app.use(express.json())

app.use('/newProductCreate',router)
app.use('/orderManagemnet',orderrouter)
app.get('/', (req, res) => {
  res.status(200).json({
    data:'hello world'
  })
})
export default app;
