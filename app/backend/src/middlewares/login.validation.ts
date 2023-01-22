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

// export default async (req: Request, res: Response, next: NextFunction) => {
//   const authorization = req.header('Authorization');

//   try {
//     const check = jwt.verify(authorization as string, process.env.JWT_SECRET as string);
//     req.body.user = check;
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: 'Invalid Token' });
//   }
// };

// export default class loginValidation {
//   public static validateEmail(email: string): boolean {
//     const emailRegex = /\S+@\S+\.\S/;
//     return emailRegex.test(email);
//   }

//   public static validatePassword(password: string): boolean {
//     const passwordRegex = /^\d+$/;
//     return passwordRegex.test(password);
//   }
// }

// module.exports = (req, res, next) => {
//   const { email } = req.body;
//   const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!EMAIL.test(email)) {
//     return res.status(400)
//       .json({ message: '"email" must be a valid email' });
//   }
//   return next();
// };

// module.exports = (req, res, next) => {
//   const { password } = req.body;
//   if (password.length < 6) {
//     return res.status(400)
//       .json({ message: '"password" length must be at least 6 characters long' });
//   }
//   return next();
// };
