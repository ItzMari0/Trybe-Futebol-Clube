import { Request, Response } from 'express';
import teamsService from '../services/teams.service';

const getTeams = async (_req: Request, res: Response) => {
  const result = await teamsService.getTeams();
  return res.status(200).json(result);
};

const findTeam = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await teamsService.findTeam(id);
  return res.status(200).json(result);
};

export default {
  getTeams,
  findTeam,
};
