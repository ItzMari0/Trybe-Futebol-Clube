import { Request, Response } from 'express';
import matchesService from '../services/matches.service';
import jwt from '../authorization/jwt';

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

const createMatch = async (req: Request, res: Response) => {
  const saveMatch = req.body;
  const { authorization } = req.headers;
  const { email } = await jwt.tokenVerify(authorization as string);
  if (email === 'Expired or invalid token') {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
  const result = await matchesService.createMatch(saveMatch);
  res.status(201).json(result);
};

const updateMatch = async (req: Request, res: Response) => {
  const { id } = req.params;
  await matchesService.updateMatch(Number(id));
  res.status(200).json({ message: 'Finished' });
};

const updateOngoingMatch = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { homeTeamGoals, awayTeamGoals } = req.body;
  await matchesService.updateOngoingMatch(Number(id), homeTeamGoals, awayTeamGoals);
  res.status(200).json({ message: 'updated' });
};

export default {
  getMatches,
  createMatch,
  updateMatch,
  updateOngoingMatch,
};
