import { Request, Response, NextFunction } from 'express';

export const emailV = (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!EMAIL.test(email)) {
    return res.status(400)
      .json({ message: 'All fields must be filled' });
  }
  return next();
};

export const passwordV = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (password.length < 1) return res.status(400).json({ message: 'All fields must be filled' });
  return next();
};
