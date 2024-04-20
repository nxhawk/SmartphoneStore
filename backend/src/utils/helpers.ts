import * as bcrypt from 'bcrypt';
import { sign, verify } from 'jsonwebtoken';
import { User } from 'src/user/entities/user.entity';

export async function hashPassword(rawPassword: string) {
  const salt = await bcrypt.genSalt();
  return bcrypt.hash(rawPassword, salt);
}

export async function compareHash(rawPassword: string, hashedPassword: string) {
  return bcrypt.compare(rawPassword, hashedPassword);
}

export function contentEmailCode(code) {
  return `
  <h1>Your code reset password: <b style="color: red;">${code}</b></h1>
  `;
}

export function randomCode() {
  const length = 10;
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }

  return result;
}

export function generateToken(user: User) {
  try {
    return sign(
      { id: user.userId, email: user.email },
      process.env.ACCESS_TOKEN_SECRET_KEY,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRE_TIME + 'd' },
    );
  } catch (error) {
    console.log(`Error in generate token:  + ${error}`);
    return null;
  }
}

export function verifyToken(token: string) {
  try {
    return verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);
  } catch (error) {
    console.log(`Error in verify token:  + ${error}`);
    return null;
  }
}

export function convertVNPhoneNumberToInternational(phoneNumber: string) {
  return '+84' + phoneNumber.slice(1, phoneNumber.length);
}

export function changeSizeAvatarFromOAuth(picture: string, size: number = 300) {
  if (picture && picture.indexOf('googleusercontent') > 0)
    return picture.split('=')[0] + `=s${size}-c`;
  return picture;
}
