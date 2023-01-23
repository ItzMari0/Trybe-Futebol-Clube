import { Router } from 'express';
import matchesController from '../controllers/matches.controller';

const router = Router();

router.get('/', matchesController.getMatches);
router.post('/', matchesController.createMatch);

export default router;
