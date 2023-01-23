import { Router } from 'express';
import loginController from '../controllers/login.controller';
import { emailV, passwordV } from '../middlewares/login.validation';
import tokenV from '../middlewares/token.validation';

const router = Router();

router.post('/', emailV, passwordV, loginController.login);
router.get('/validate', tokenV, loginController.validate);

export default router;
