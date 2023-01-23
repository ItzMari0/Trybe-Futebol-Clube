import { Request, Response } from 'express';
import matchesService from '../services/matches.service';

const getMatches = async (req: Request, res: Response) => {
  const { inProgress } = req.query;
  let result;
  if (inProgress) {
    result = await matchesService.filterMatches(JSON.parse(inProgress as string));
  } else {
    result = await matchesService.getMatches();
  }
  return res.status(200).json(result);
};

export default {
  getMatches,
};
