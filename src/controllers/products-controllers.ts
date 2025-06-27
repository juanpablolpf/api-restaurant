import {NextFunction, Request, Response} from "express"
import { AppError } from "@/utils/AppError"

class ProductCrontroller {
    async index(request: Request, response: Response, next: NextFunction){
        try {
            return response.json({message: "ok"})
        } catch (error) {
            next(error)
        }
    }
}

export {ProductCrontroller}