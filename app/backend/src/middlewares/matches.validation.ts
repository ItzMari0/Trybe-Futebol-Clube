import { Request, Response, NextFunction } from 'express';
import Team from '../database/models/Team.model';

export default async (req: Request, res: Response, next: NextFunction) => {
  const saveMatch = req.body;
  const { homeTeamId, awayTeamId } = saveMatch;
  const homeTeam = await Team.findByPk(homeTeamId);
  const awayTeam = await Team.findByPk(awayTeamId);

  if (homeTeamId === awayTeamId) {
    return res.status(422)
      .json({ message: 'It is not possible to create a match with two equal teams' });
  }
  if (!homeTeam || !awayTeam) {
    return res.status(404)
      .json({ message: 'There is no team with such id!' });
  }
  return next();
};
