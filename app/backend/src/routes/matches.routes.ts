import { Router } from 'express';
import teamV from '../middlewares/matches.validation';
import matchesController from '../controllers/matches.controller';

const router = Router();

router.get('/', matchesController.getMatches);
router.post('/', teamV, matchesController.createMatch);
router.patch('/:id/finish', matchesController.updateMatch);
router.patch('/:id', matchesController.updateOngoingMatch);

export default router;
