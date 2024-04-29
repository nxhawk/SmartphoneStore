import { Inject, Injectable } from '@nestjs/common';
import { IPaypalService } from '../interfaces/paypal';
import * as paypal from 'paypal-rest-sdk';
import { User } from 'src/user/entities/user.entity';
import { Services } from 'src/utils/constants';
import { IOrderService } from 'src/order/interfaces/order';
import { ICartService } from 'src/cart/cart';

@Injectable()
export class PaypalService implements IPaypalService {
  constructor(
    @Inject(Services.ORDER_SERVICE)
    private readonly orderService: IOrderService,
    @Inject(Services.CART_SERVICE)
    private readonly cartService: ICartService,
  ) {
    paypal.configure({
      mode: process.env.PAYPAL_ENVIRONMENT, //sandbox or live
      client_id: process.env.PAYPAL_CLIENT_ID,
      client_secret: process.env.PAYPAL_CLIENT_SECRET,
    });
  }

  async withPaypal(user: User, res, req) {
    await this.orderService.createNewOrder(user, {
      reciverName: req.body?.reciverName,
      address: req.body?.address,
      phoneNumber: req.body?.phoneNumber,
      isPayment: false,
      paymentMethod: 'paypal',
    });

    const totalCost = (await this.cartService.totalCost(user)) || 0;
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
            total: totalCost,
          },
          description: 'Thanh toán với Paypal account',
        },
      ],
    };

    await paypal.payment.create(create_payment_json, function (error, payment) {
      if (error) {
        throw new Error(error);
      } else {
        for (let i = 0; i < payment.links.length; i++) {
          if (payment.links[i].rel === 'approval_url') {
            console.log(payment.links[i].href);
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
