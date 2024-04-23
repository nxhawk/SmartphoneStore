import { Injectable } from '@nestjs/common';
import { IVnpayService } from '../interfaces/vnpay';
import * as moment from 'moment';
import * as crypto from 'crypto';
import * as querystring from 'qs';
import { v4 as uuidv4 } from 'uuid';
import { generateToken, sortObject, verifyToken } from 'src/utils/helpers';
import { NotMoneyProvide } from '../exceptions/NotMoneyProvide';
import { User } from 'src/user/entities/user.entity';
import { VnpayError } from '../exceptions/VnpayError';

@Injectable()
export class VnpayService implements IVnpayService {
  async getVnPayReturn(token: string, req) {
    try {
      const verify = await verifyToken(token);
      if (!verify || !verify.email) throw new VnpayError();

      let vnp_Params = req.query;

      const secureHash = vnp_Params['vnp_SecureHash'];
      const amount = parseInt(vnp_Params['vnp_Amount']) || 0;

      delete vnp_Params['vnp_SecureHash'];
      delete vnp_Params['vnp_SecureHashType'];

      vnp_Params = sortObject(vnp_Params);

      const config = {
        vnp_TmnCode: process.env.vnp_TmnCode,
        vnp_HashSecret: process.env.vnp_HashSecret,
        vnp_Url: process.env.vnp_Url,
        vnp_Api: process.env.vnp_Api,
        vnp_ReturnUrl: `${process.env.ROOT_SERVER}${process.env.vnp_ReturnUrl}`,
      };

      const secretKey = config['vnp_HashSecret'];

      const signData = querystring.stringify(vnp_Params, { encode: false });
      const hmac = crypto.createHmac('sha512', secretKey);
      const signed = hmac.update(new Buffer(signData, 'utf-8')).digest('hex');

      if (secureHash === signed) {
        //Kiem tra xem du lieu trong db co hop le hay khong va thong bao ket qua
        if (vnp_Params['vnp_ResponseCode'] == '00') {
          // add money to email
          return amount;
        }
        return 'Error';
      } else {
        return 'Error';
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  payment(user: User, req) {
    if (!req.body || !req.body.money) throw new NotMoneyProvide();
    const token = generateToken(user);
    try {
      process.env.TZ = 'Asia/Ho_Chi_Minh';
      const date = new Date();
      const createDate = moment(date).format('YYYYMMDDHHmmss');

      const ipAddr =
        req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;

      const config = {
        vnp_TmnCode: process.env.vnp_TmnCode,
        vnp_HashSecret: process.env.vnp_HashSecret,
        vnp_Url: process.env.vnp_Url,
        vnp_Api: process.env.vnp_Api,
        vnp_ReturnUrl: `${process.env.ROOT_SERVER}/api${process.env.vnp_ReturnUrl}`,
      };

      const tmnCode = config['vnp_TmnCode'];
      const secretKey = config['vnp_HashSecret'];
      let vnpUrl = config['vnp_Url'];
      const returnUrl = config['vnp_ReturnUrl'] + '/' + token;

      const orderId = uuidv4();
      const amount = req.body.money;

      let locale = null;
      if (locale === null || locale === '') {
        locale = 'vn';
      }
      const currCode = 'VND';
      let vnp_Params = {};
      vnp_Params['vnp_Version'] = '2.1.0';
      vnp_Params['vnp_Command'] = 'pay';
      vnp_Params['vnp_TmnCode'] = tmnCode;
      vnp_Params['vnp_Locale'] = locale;
      vnp_Params['vnp_CurrCode'] = currCode;
      vnp_Params['vnp_TxnRef'] = orderId;
      vnp_Params['vnp_OrderInfo'] = 'Nạp tiền cho mã GD:' + orderId;
      vnp_Params['vnp_OrderType'] = 'other';
      vnp_Params['vnp_Amount'] = amount * 100;
      vnp_Params['vnp_ReturnUrl'] = returnUrl;
      vnp_Params['vnp_IpAddr'] = ipAddr;
      vnp_Params['vnp_CreateDate'] = createDate;

      vnp_Params = sortObject(vnp_Params);

      const signData = querystring.stringify(vnp_Params, { encode: false });
      const hmac = crypto.createHmac('sha512', secretKey);
      const signed = hmac.update(new Buffer(signData, 'utf-8')).digest('hex');
      vnp_Params['vnp_SecureHash'] = signed;
      vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: false });

      return vnpUrl;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}
