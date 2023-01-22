import { Request, Response } from 'express';
import loginService from '../services/login.service';

export default async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const result = await loginService(email, password);
  if (result === 'Incorrect email or password') {
    return res.status(401).json({ message: result });
  }
  return res.status(200).json({ token: result });
};
