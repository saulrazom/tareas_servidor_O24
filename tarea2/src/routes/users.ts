import {Router} from 'express';
import usersController from '../controllers/user.controller';
const router = Router();

router.get('/', usersController.getAll);
router.post('/sigin', usersController.registerUser);
router.post('/login', usersController.loginUser);


export default router;
