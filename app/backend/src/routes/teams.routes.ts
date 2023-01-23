import { Router } from 'express';
import teamsController, { teamFind } from '../controllers/teams.controller';

const router = Router();

router.get('/:id', teamFind);
router.get('/', teamsController);

export default router;
