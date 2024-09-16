import express, { Request, Response } from 'express';

export class UsersController {
    getAll(req: Request, res: Response) {
        res.send('Lista de usuarios');
    }
}

const userController = new UsersController();
export default userController; 