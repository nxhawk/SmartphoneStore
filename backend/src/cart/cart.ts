import { User } from 'src/user/entities/user.entity';
import { Cart } from './entities/cart.entity';

export interface ICartService {
  getCart(user: User): Promise<Cart[]>;
  getProductInCart(user: User): Promise<number>;
  addToCart(user: User, productId: number): Promise<Cart>;
  findCartByProductId(userId: number, productId: number): Promise<Cart>;
  changeNumberOfProduct(
    user: User,
    productId: number,
    value: number,
  ): Promise<Cart>;
  deleteProductFromCart(user: User, productId: number): Promise<Cart>;
  totalCost(user: User): Promise<number>;
  clearCart(user: User);
}
