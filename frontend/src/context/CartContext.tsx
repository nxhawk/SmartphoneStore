import { useState } from "react";
import { Dispatch, ReactNode, SetStateAction, createContext } from "react";
import { getProductInCart } from "../api/cart/apiCart";
import { useQuery } from "@tanstack/react-query";

interface CartContextType {
  productInCart: number;
  setProductInCart: Dispatch<SetStateAction<number>>;
  refetch: () => void;
}


const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({children}) =>{
  const [productInCart, setProductInCart] = useState<number>(0);

  const { refetch } = useQuery({
    queryKey: ['cartInProduct'],
    queryFn: async () => {
      const data = await getProductInCart();
      setProductInCart(data);
      return data;
    },
  })

  return (
    <CartContext.Provider
      value={{ productInCart, setProductInCart, refetch }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };