import OrderUserInfo from "../components/OrderUserInfo"
import ProductOrder from "../components/ProductOrder"

const Cart = () => {
  return (
    <div className='mt-4 px-2'>
      <div className="flex flex-wrap gap-4 justify-center">
        <div className="md:w-7/12 w-full mb-6 flex-1">
          <div className="rounded-sm shadow uppercase px-4 py-1 font-semibold">Giỏ hàng của bạn bao gồm 1 sản phẩm</div>
          <div className="rounded-sm shadow-lg p-2 bg-slate-50 mt-3">
            {
              [1, 2, 3, 4, 5, 6, 7].map(item=>(
                <ProductOrder
                  key={item}
                />
              ))
            }
          </div>
        </div>
        <div className="flex-1">
          <OrderUserInfo/>
        </div>
      </div>
    </div>
  )
}

export default Cart