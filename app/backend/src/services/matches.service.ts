import IMatch from '../interfaces/IMatch';
import Match from '../database/models/Match.model';
import team from '../database/models/Team.model';

const getMatches = async () => {
  const result = await Match.findAll({
    include: [
      {
        model: team,
        as: 'homeTeam',
        attributes: ['teamName'],
      },
      {
        model: team,
        as: 'awayTeam',
        attributes: ['teamName'],
      },
    ],
  });
  return result;
};

const filterMatches = async (inProgress: boolean) => {
  const result = await Match.findAll({
    include: [
      {
        model: team,
        as: 'homeTeam',
        attributes: ['teamName'],
      },
      {
        model: team,
        as: 'awayTeam',
        attributes: ['teamName'],
      },
    ],
    where: { inProgress },
  });
  return result;
};

const createMatch = async (saveMatch: IMatch) => {
  const result = await Match.create({ ...saveMatch, inProgress: true });
  return result;
};

const updateMatch = async (id: number) => {
  await Match.update({ inProgress: false }, { where: { id } });
};

export default {
  getMatches,
  filterMatches,
  createMatch,
  updateMatch,
};
