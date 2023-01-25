import { Request, Response } from 'express';
import leaderboardService from '../services/leaderboard.service';

const leaderboard = async (_req: Request, res: Response) => {
  const result = await leaderboardService.leaderboard();
  return res.status(200).json(result);
};

export default {
  leaderboard,
};
