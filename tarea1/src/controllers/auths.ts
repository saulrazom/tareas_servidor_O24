import { Request, Response, NextFunction } from 'express';
import { User } from "../types/user";

declare namespace Express {
    export interface Request {
        user?: User;
    }
}

export default function  authMiddleware(req: Request, res: Response, next: NextFunction) {
    //const token = req.header.Autorization;
    const key = req.query.key;
    if (key === '1234'){ 
        const user: User = {
            id: '1',
            name: 'Jhon'
        }
        return next();
    }
    res.status(401).send('No autorizado');
    //O ir al next o mandar un mensaje.
}


