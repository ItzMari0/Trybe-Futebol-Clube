import Team from '../database/models/Team.model';

const getTeams = async () => {
  const result = await Team.findAll();
  return result;
};

const findTeam = async (id: string) => {
  const result = await Team.findByPk(id);
  return result;
};

export default {
  getTeams,
  findTeam,
};
