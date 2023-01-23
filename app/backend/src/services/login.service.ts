import { compare } from 'bcryptjs';
import IToken from '../interfaces/IToken';
import User from '../database/models/User.model';
import jwt from '../authorization/jwt';

const login = async (email: string, password: string) => {
  const result = await User.findOne({ where: { email } }) as User;
  if (!result) return 'Incorrect email or password';
  const passwordCheck = await compare(password, result.password);
  if (!passwordCheck) return 'Incorrect email or password';
  const token: string = jwt.tokenGenerator(result.id, email);
  return token;
};

const validate = async (authorization: string) => {
  const { email }: IToken = jwt.tokenVerify(authorization);
  const result = await User.findOne({ where: { email } }) as User;
  if (!result) return 'User not found';
  return result.role;
};

export default {
  login,
  validate,
};
