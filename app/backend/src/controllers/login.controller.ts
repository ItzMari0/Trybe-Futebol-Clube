import { Request, Response } from 'express';
import loginService from '../services/login.service';

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const result = await loginService.login(email, password);
  if (result === 'Incorrect email or password') {
    return res.status(401).json({ message: result });
  }
  return res.status(200).json({ token: result });
};

const validate = async (req: Request, res: Response) => {
  const { authorization } = req.headers;
  const result = await loginService.validate(authorization as string);
  if (result === 'User not found') return res.status(401).json({ result });
  return res.status(200).json({ role: result });
};

export default {
  login,
  validate,
};
