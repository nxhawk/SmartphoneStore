import { Injectable } from '@nestjs/common';
import { IPaypalService } from '../interfaces/paypal';
import * as paypal from 'paypal-rest-sdk';

@Injectable()
export class PaypalService implements IPaypalService {
  constructor() {
    paypal.configure({
      mode: process.env.PAYPAL_ENVIRONMENT, //sandbox or live
      client_id: process.env.PAYPAL_CLIENT_ID,
      client_secret: process.env.PAYPAL_CLIENT_SECRET,
    });
  }

  async withPaypal(res) {
    const create_payment_json = {
      intent: 'sale',
      payer: {
        payment_method: 'paypal',
      },
      redirect_urls: {
        return_url: `${process.env.ROOT_SERVER}/api/payment/paypal-success`,
        cancel_url: `${process.env.ROOT_SERVER}/api/payment/paypal-cancel`,
      },
      transactions: [
        {
          item_list: {
            items: [
              {
                name: 'Iphone 4S',
                sku: '001',
                price: '25.00',
                currency: 'USD',
                quantity: 1,
              },
            ],
          },
          amount: {
            currency: 'USD',
            total: '25.00',
          },
          description: 'Iphone 4S cũ giá siêu rẻ',
        },
      ],
    };

    await paypal.payment.create(create_payment_json, function (error, payment) {
      if (error) {
        throw new Error(error);
      } else {
        for (let i = 0; i < payment.links.length; i++) {
          if (payment.links[i].rel === 'approval_url') {
            res.send(payment.links[i].href);
            return;
          }
        }
      }
    });
  }

  async paypalSuccess(req, res) {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;

    const execute_payment_json = {
      payer_id: payerId,
      // transactions: [
      //   {
      //     amount: {
      //       currency: 'USD',
      //       total: '25.00',
      //     },
      //   },
      // ],
    };
    paypal.payment.execute(
      paymentId,
      execute_payment_json,
      function (error, payment) {
        if (error) {
          console.log(error.response);
          throw error;
        } else {
          return res.json(payment);
        }
      },
    );

    return false;
  }
}
