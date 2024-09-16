import { Request, Response, NextFunction } from 'express';
import { User } from "../types/user";

// Agregamos el rol a la interfaz del User
declare namespace Express {
    export interface Request {
        user?: User;
    }
}

export function roles(allowedRoles: string[]) { //CLOUSURE
    return (req: Request, res: Response, next: NextFunction) => {
        const key = req.query.key;

        if (key === '1234') { 
            const user: User = {
                id: '1',
                name: 'Jhon',
                role: 'gerente'  
            };
         
            if (allowedRoles.includes(user.role)) {
                return next();
            } else {
                return res.status(403).send('No tiene permisos suficientes: Rol no autorizado');
            }
        }

        res.status(401).send('No autorizado: Key inválida');
    }
}
