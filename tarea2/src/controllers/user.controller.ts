import {Request, Response} from 'express';
import {HTTP_STATUS_CODES} from '../types/http-status-codes';
import User from '../models/user';
import { error } from 'console';
import JWT from 'jsonwebtoken';
import bcrypt from 'bcryptjs'; 

class UsersController {

    async getAll(req: Request, res: Response) {
        try {
            const users = await User.find({});
            res.send(users);
        
        }
        catch (e) {
            console.error('Server error: ', e);
            res.sendStatus(HTTP_STATUS_CODES.SERVER_ERROR);
            
        }
        
    }

    async registerUser(req: Request, res: Response) {
        const {firstName, lastName, email, password, role, status} = req.body;
        try {
            let user = await User.findOne({ email });
            if (user) {
                return res.status(HTTP_STATUS_CODES.BAD_REQUEST).send('User already exists');
            }
            user = new User({firstName, lastName, email, password, role, status});
            await user.save();
            res.send(user);
        }
        catch (e) {
            console.error('Server error: ', e);
            res.sendStatus(HTTP_STATUS_CODES.SERVER_ERROR);
        }
    }

    async loginUser(req: Request, res: Response) {
        const { email, password } = req.body;

        try {
            // SI EXISTE USUARIO Y STATUS NO ES DELETED O BLOCKED
            const user = await User.findOne({ email, status: { $nin: ['deleted', 'blocked'] } });
            if (!user) {
                return res.status(HTTP_STATUS_CODES.AUTHORIZATION).send('Invalid email or wrong status');
            }

            // COMPARAR CONTRASEÑA CON ENCRIPTADA
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(HTTP_STATUS_CODES.AUTHORIZATION).send('Invalid password');
            }

            // TOKEN
            const token = JWT.sign(
                { _id: user._id, role: user.role },
                process.env.SECRET_KEY as string
            );

            res.send({ token });
        }
        catch (e) {
            console.error('Server error: ', e);
            res.sendStatus(HTTP_STATUS_CODES.SERVER_ERROR);
        }
    }

}

const controller = new UsersController();
export default controller;

