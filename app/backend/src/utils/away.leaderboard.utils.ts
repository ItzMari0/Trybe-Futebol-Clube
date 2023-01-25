import Team from '../database/models/Team.model';
import Match from '../database/models/Match.model';
import ILeaderboard from '../interfaces/ILeaderboard';

const teamDetails: ILeaderboard = {
  name: '',
  totalPoints: 0,
  totalGames: 0,
  totalVictories: 0,
  totalDraws: 0,
  totalLosses: 0,
  goalsFavor: 0,
  goalsOwn: 0,
  goalsBalance: 0,
  efficiency: 0,
};

const Points = (match: Match, totalPoints: number) => {
  const { homeTeamGoals, awayTeamGoals } = match.dataValues;
  if (homeTeamGoals < awayTeamGoals) return totalPoints + 3;
  if (homeTeamGoals === awayTeamGoals) return totalPoints + 1;
  return totalPoints;
};

const Victories = (match: Match, totalVictories: number) => {
  const { homeTeamGoals, awayTeamGoals } = match.dataValues;
  if (homeTeamGoals < awayTeamGoals) return totalVictories + 1;
  return totalVictories;
};

const Draws = (match: Match, totalDraws: number) => {
  const { homeTeamGoals, awayTeamGoals } = match.dataValues;
  if (homeTeamGoals === awayTeamGoals) return totalDraws + 1;
  return totalDraws;
};

const Defeats = (match: Match, totalLosses: number) => {
  const { homeTeamGoals, awayTeamGoals } = match.dataValues;
  if (homeTeamGoals > awayTeamGoals) return totalLosses + 1;
  return totalLosses;
};

const AwayBoard = (team: ILeaderboard, match: Match) => {
  const { homeTeamGoals, awayTeamGoals } = match.dataValues;
  const data = team;
  data.totalPoints = Points(match, data.totalPoints);
  data.totalGames += 1;
  data.totalVictories = Victories(match, data.totalVictories);
  data.totalDraws = Draws(match, data.totalDraws);
  data.totalLosses = Defeats(match, data.totalLosses);
  data.goalsFavor += awayTeamGoals;
  data.goalsOwn += homeTeamGoals;
  data.goalsBalance = data.goalsFavor - data.goalsOwn;
  data.efficiency = Number(((data.totalPoints / (data.totalGames * 3)) * 100).toFixed(2));
  return data;
};

export function AwayLeaderboard(team: Team, matches: Match[]): ILeaderboard {
  const data = JSON.parse(JSON.stringify(teamDetails));
  data.name = team.teamName;
  matches.forEach((match) => {
    const { awayTeamId } = match.dataValues;
    if (awayTeamId === team.id) return AwayBoard(data, match);
  });
  return data;
}

export function SortLeaderboard(leaderboard: ILeaderboard[]) {
  const sorting = leaderboard.sort((a, b) => b.totalPoints - a.totalPoints
  || b.totalVictories - a.totalVictories
  || b.goalsBalance - a.goalsBalance
  || b.goalsFavor - a.goalsFavor);
  return sorting;
}
