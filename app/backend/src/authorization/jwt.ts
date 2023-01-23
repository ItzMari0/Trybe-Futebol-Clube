import * as jwt from 'jsonwebtoken';
import IToken from '../interfaces/IToken';

const secret = process.env.JWT_SECRET || 'secret';

const tokenGenerator = (id: number, email: string) => jwt
  .sign({ id, email }, secret, {
    algorithm: 'HS256',
    expiresIn: '1d',
  });

const tokenVerify = (authorization: string) => {
  try {
    const payload = jwt.verify(authorization, secret);
    console.log(payload);
    return payload as IToken;
  } catch (error) {
    return { email: 'Expired or invalid token' };
  }
};

// const tokenDecode = (authorization: string) => {
//   const { data } = jwt.decode(authorization);
//   return data.id;
// };

export default {
  tokenGenerator,
  tokenVerify,
  // tokenDecode,
};
