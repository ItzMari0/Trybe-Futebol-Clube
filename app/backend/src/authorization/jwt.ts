import * as jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

const tokenGenerator = (id: number, email: string) => jwt
  .sign({ id, email }, secret as string, {
    algorithm: 'HS256',
    expiresIn: '1d',
  });

const tokenVerify = (authorization: string) => {
  try {
    const payload = jwt.verify(authorization, secret as string);
    return { type: null, message: payload };
  } catch (error) {
    return { type: 401, message: 'Expired or invalid token' };
  }
};

// const tokenDecode = (authorization) => {
//   const { data } = jwt.decode(authorization);
//   return data.id;
// };

export default {
  tokenGenerator,
  tokenVerify,
  // tokenDecode,
};
