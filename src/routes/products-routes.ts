import { ProductCrontroller } from "@/controllers/products-controllers"
import {Router} from "express"

const productsRoutes = Router()
const productCrontroller = new ProductCrontroller()

productsRoutes.get("/", productCrontroller.index)

export {productsRoutes}