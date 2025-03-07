import { Request, Response, NextFunction } from "express";
import * as jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'

dotenv.config();


declare var process : {
    env: {
      SECRET_ACCESS_TOKEN: string
    }
  }

declare module 'express' {
    export interface Request {
          user?: any;
      }
  }

function authenticateToken(req: Request, res: Response, next: NextFunction){
    const header = req.headers['authorization']
    const token = header && header.split(' ')[1]
    let decoded: string | jwt.JwtPayload;
    if (token == null) {
        res.status(400).json({
            Status: "Failed",
            Status_Code: 400,
            Status_Message: "Token invalid."
        })
    }
    else{
        decoded = jwt.verify(token, process.env.SECRET_ACCESS_TOKEN)
        if(decoded == null){
            return console.log("Token duration expired")
        }
        else{
            req.user = decoded;
            next()
        }
    }
}

export default authenticateToken