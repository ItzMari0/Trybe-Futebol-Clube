import { Router } from 'express';

import leaderboardController from '../controllers/leaderboard.controller';

const router = Router();

router.get('/home', leaderboardController.leaderboard);
router.get('/away', leaderboardController.awayLeaderboard);

export default router;
