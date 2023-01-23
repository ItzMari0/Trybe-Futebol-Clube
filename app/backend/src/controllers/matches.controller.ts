import { Request, Response } from 'express';
import matchesService from '../services/matches.service';

const getMatches = async (_req: Request, res: Response) => {
  const result = await matchesService.getMatches();
  return res.status(200).json(result);
};

export default {
  getMatches,
};
