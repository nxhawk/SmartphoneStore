import * as bcrypt from 'bcrypt';
import { sign, verify } from 'jsonwebtoken';
import { Product } from 'src/product/entities/product.entity';
import { User } from 'src/user/entities/user.entity';
import {
  FindOneOptions,
  LessThan,
  LessThanOrEqual,
  MoreThan,
  MoreThanOrEqual,
} from 'typeorm';

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

export function filterByPrice(query: string) {
  switch (query) {
    case 'under2':
      return LessThan(2000000);
    case '2_4':
      return MoreThanOrEqual(2000000) && LessThanOrEqual(4000000);
    case '4_7':
      return MoreThanOrEqual(4000000) && LessThanOrEqual(7000000);
    case '7_13':
      return MoreThanOrEqual(7000000) && LessThanOrEqual(13000000);
    case 'more13':
      return MoreThan(13000000);
    default:
      undefined;
  }
}

export function SortByOption(query: string): FindOneOptions<Product> {
  switch (query) {
    case 'PINC':
      return {
        order: {
          price: 'ASC',
        },
      };
    case 'PDEC':
      return {
        order: {
          price: 'DESC',
        },
      };
    case 'SINC':
      return {
        order: {
          rate: 'ASC',
        },
      };
    case 'SDEC':
      return {
        order: {
          rate: 'DESC',
        },
      };
    case 'A-Z':
      return {
        order: {
          name: 'ASC',
        },
      };
    case 'Z-A':
      return {
        order: {
          name: 'DESC',
        },
      };
    default:
      return {
        order: {},
      };
  }
}

export function sortObject(obj) {
  const sorted = {};
  const str = [];
  let key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      str.push(encodeURIComponent(key));
    }
  }
  str.sort();
  for (key = 0; key < str.length; key++) {
    sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, '+');
  }
  return sorted;
}
