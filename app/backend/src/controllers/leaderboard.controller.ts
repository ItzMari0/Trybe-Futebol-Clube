import { Request, Response } from 'express';
import leaderboardService from '../services/leaderboard.service';

const homeLeaderboard = async (_req: Request, res: Response) => {
  const result = await leaderboardService.homeLeaderboard();
  return res.status(200).json(result);
};

const awayLeaderboard = async (_req: Request, res: Response) => {
  const result = await leaderboardService.awayLeaderboard();
  return res.status(200).json(result);
};

// const leaderboard = async (_req: Request, res: Response) => {
//   const result = await leaderboardService.leaderboard();
//   return res.status(200).json(result);
// };

export default {
  homeLeaderboard,
  awayLeaderboard,
  // leaderboard,
};
