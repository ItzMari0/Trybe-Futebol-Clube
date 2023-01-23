import { Router } from 'express';
import matchesController from '../controllers/matches.controller';

const router = Router();

router.get('/', matchesController.getMatches);
router.post('/', matchesController.createMatch);
router.patch('/:id/finish', matchesController.updateMatch);

export default router;
