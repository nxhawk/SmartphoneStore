import { Inject, Injectable } from '@nestjs/common';
import { ICartService } from './cart';
import { Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Services } from 'src/utils/constants';
import { IUserService } from 'src/user/user';
import { IProduct } from 'src/product/interfaces/product';
import { UserNotFound } from 'src/user/exceptions/UserNotFound';
import { ProductNotFound } from 'src/product/exceptions/ProductNotFound';
import { ProductInCart } from './exceptions/ProductInCart';
import { CartError } from './exceptions/CartError';

@Injectable()
export class CartService implements ICartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>,
    @Inject(Services.USERS)
    private readonly userService: IUserService,
    @Inject(Services.PRODUCT_SERVICE)
    private readonly productService: IProduct,
  ) {}

  async getCart(user: User): Promise<Cart[]> {
    const checkUser = await this.userService.findUser({ userId: user.userId });
    if (!checkUser) throw new UserNotFound();
    return this.cartRepository
      .createQueryBuilder('cart')
      .where('cart.userId = :userId', { userId: checkUser.userId })
      .leftJoinAndSelect('cart.productId', 'p')
      .getMany();
  }

  async findCartByProductId(userId: number, productId: number): Promise<Cart> {
    return this.cartRepository
      .createQueryBuilder('cart')
      .andWhere('cart.productId = :productId', { productId })
      .andWhere('cart.userId = :userId', { userId })
      .getOne();
  }

  async addToCart(user: User, productId: number): Promise<Cart> {
    const checkUser = await this.userService.findUser({ userId: user.userId });
    if (!checkUser) throw new UserNotFound();
    const product = await this.productService.getPById(productId);
    if (!product) throw new ProductNotFound();
    const checkCart = await this.findCartByProductId(
      checkUser.userId,
      product.productId,
    );
    if (checkCart) throw new ProductInCart();

    const cart = await this.cartRepository.create({
      productId: product,
      userId: checkUser,
    });

    return this.cartRepository.save(cart);
  }

  async changeNumberOfProduct(
    user: User,
    productId: number,
    value: number,
  ): Promise<Cart> {
    const checkUser = await this.userService.findUser({ userId: user.userId });
    if (!checkUser) throw new UserNotFound();
    const product = await this.productService.getPById(productId);
    if (!product) throw new ProductNotFound();
    const checkCart = await this.findCartByProductId(
      checkUser.userId,
      product.productId,
    );
    if (!checkCart) {
      if (value == 1) return this.addToCart(user, productId);
      throw new CartError();
    }

    if (value == -1 && checkCart.quantity == 1) throw new CartError();

    checkCart.quantity += value;
    return this.cartRepository.save(checkCart);
  }

  async deleteProductFromCart(user: User, productId: number): Promise<Cart> {
    const checkUser = await this.userService.findUser({ userId: user.userId });
    if (!checkUser) throw new UserNotFound();
    const product = await this.productService.getPById(productId);
    if (!product) throw new ProductNotFound();
    const checkCart = await this.findCartByProductId(
      checkUser.userId,
      product.productId,
    );
    if (!checkCart) throw new CartError();
    return this.cartRepository.remove(checkCart);
  }
}
