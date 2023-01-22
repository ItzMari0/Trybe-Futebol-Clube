import { compare } from 'bcryptjs';
import User from '../database/models/User.model';
import auth from '../authorization/jwt';

export default async (email: string, password: string) => {
  const result = await User.findOne({ where: { email } });
  if (!result) return 'Incorrect email or password';
  const passwordCheck = await compare(password, result.password);
  if (!passwordCheck) return 'Incorrect email or password';
  const token: string = auth.tokenGenerator(result.id, email);
  return token;
};
