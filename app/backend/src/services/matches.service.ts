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

export default {
  getMatches,
  filterMatches,
};
