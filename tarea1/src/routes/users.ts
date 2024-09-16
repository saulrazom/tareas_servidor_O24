import { Router } from 'express'; 
import  userController from '../controllers/user.controller';
import { roles } from '../middlewares/auths';  

const router = Router();

router.get('/', roles(['admin', 'gerente']), userController.getAll);

export default router; 

