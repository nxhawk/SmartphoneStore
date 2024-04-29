import DocumentMeta from "react-document-meta"
import OrderUserInfo from "../components/OrderUserInfo"
import ProductOrder from "../components/ProductOrder"
import { CartMeta } from "../utils/meta"
import { useMutation, useQuery } from "@tanstack/react-query"
import { getCart, removeProductInCart } from "../api/cart/apiCart"
import { IProductCart } from "../types/cart"
import { toast } from "react-toastify"
import { ServerError } from "../types/global"
import { AxiosError } from "axios"
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { useContext } from "react"

const Cart = () => {
  const { refetch: refetchCart } = useContext(CartContext)!;

  const navigate = useNavigate();
  const [t] = useTranslation('global');
  const { isLoading, isError, data: products, refetch } = useQuery({
    queryKey: ['cart'],
    queryFn: async () => {
      const data = await getCart();
      return data;
    },
  })

  const deleteProductFromCartMutation = useMutation({
    mutationFn: async (productId: number) => removeProductInCart (productId),
    onError: (error: AxiosError) =>{
      if (error.response){
        const errorMessage = error.response.data as ServerError;
        toast.error(errorMessage.message || "Server error");
      } else{
        toast.error('Server error');
      }
    },
    onSuccess: () => {
      refetchCart();
      refetch();
    }
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return navigate('/auth/login');

  return (
    <DocumentMeta {...CartMeta}>
      <div className='mt-4 px-2'>
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="md:w-7/12 w-full mb-6 flex-1">
            <div className="rounded-sm shadow uppercase px-4 py-1 font-semibold">{t('page.cart.cartCount')}{' '}{products.length}{' '}{t('product')}</div>
            <div className="rounded-sm shadow-lg p-2 bg-slate-50 mt-3">
              {
                products.length <= 0 &&<div className="py-10 text-amber-400 text-4xl text-center">Cart Empty</div>
              }
              {
                products.length > 0 && products.map((product: IProductCart)=>(
                  <ProductOrder
                    key={product.id}
                    product={product.productId}
                    quantity={product.quantity}
                    remove={deleteProductFromCartMutation}
                  />
                ))
              }
            </div>
          </div>
          {
            products.length > 0 &&
            <div className="flex-1">
              <OrderUserInfo/>
            </div>
          }
        </div>
      </div>
    </DocumentMeta>
  )
}

export default Cart