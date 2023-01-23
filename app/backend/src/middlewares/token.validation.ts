import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Expired or invalid token' });
  return next();
};
