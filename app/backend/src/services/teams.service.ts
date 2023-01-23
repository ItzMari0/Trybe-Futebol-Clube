import Team from '../database/models/Team.model';

export default async () => {
  const result = await Team.findAll();
  return result;
};

export const findTeam = async (id: string) => {
  const result = await Team.findByPk(id);
  return result;
};
