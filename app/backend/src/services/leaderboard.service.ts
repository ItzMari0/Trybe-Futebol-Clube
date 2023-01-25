// import ILeaderboard from '../interfaces/ILeaderboard';
import Team from '../database/models/Team.model';
import Match from '../database/models/Match.model';
import { Leaderboard, SortLeaderboard } from '../utils/awayleaderboard.util';

const leaderboard = async () => {
  const matches = await Match.findAll({ where: { inProgress: false },
    include: [
      { model: Team, as: 'homeTeam', attributes: ['teamName'] },
      { model: Team, as: 'awayTeam', attributes: ['teamName'] },
    ],
  });
  const teams = await Team.findAll();
  const board = teams.map((team) => Leaderboard(team, matches));
  return SortLeaderboard(board);
};

const awayLeaderboard = async () => {
  const matches = await Match.findAll({ where: { inProgress: false },
    include: [
      { model: Team, as: 'awayTeam', attributes: ['teamName'] },
      { model: Team, as: 'homeTeam', attributes: ['teamName'] },
    ],
  });
  const teams = await Team.findAll();
  const board = teams.map((team) => Leaderboard(team, matches));
  return SortLeaderboard(board);
};

export default {
  leaderboard,
  awayLeaderboard,
};
