import { Router } from 'express';
import loginController from '../controllers/login.controller';
import { emailV, passwordV } from '../middlewares/login.validation';

const router = Router();

router.post('/', emailV, passwordV, loginController);

export default router;
