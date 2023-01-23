import { Request, Response } from 'express';
import teamsService, { findTeam } from '../services/teams.service';

export default async (_req: Request, res: Response) => {
  const result = await teamsService();
  return res.status(200).json(result);
};

export const teamFind = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await findTeam(id);
  return res.status(200).json(result);
};
