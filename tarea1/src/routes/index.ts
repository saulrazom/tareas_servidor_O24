import express,{ Router } from 'express'; //Si es una propiedad se usan llaves
import userRoutes from './users';


const router = Router();

//Usuarios
router.use('/users', userRoutes);


export default router; //Solo uno por archivo