import { Router } from 'express';
import teamsController from '../controllers/teams.controller';

const router = Router();

router.get('/:id', teamsController.findTeam);
router.get('/', teamsController.getTeams);

export default router;
