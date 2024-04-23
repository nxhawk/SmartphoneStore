import { useParams } from "react-router-dom"
import ReactStars from "react-rating-stars-component";
import phone from'../assets/images/products/iphone-x-256gb-silver-400x400.jpg'
import { convertToVND } from "../utils/helper";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaBoxOpen } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import CommentList from "../components/CommentList";
import ProductFrame from "../components/ProductFrame";
import ScrollButton from "../components/ScrollButton/ScrollButton";
import { DetailsProductMeta } from "../utils/meta";
import DocumentMeta from "react-document-meta";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getOneProduct } from "../api/product/apiProduct";
import { IProductDetails } from "../types/product";
import { addToCart } from "../api/cart/apiCart";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { ServerError } from "../types/global";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState<IProductDetails|null>(null)
  const { productId }  = useParams()

  const addToCartMutation = useMutation({
    mutationFn: async (productId: number) => addToCart(productId),
    onError: (error: AxiosError) =>{
      if (error.response){
        const errorMessage = error.response.data as ServerError;
        toast.error(errorMessage.message || "Server error");
      } else{
        toast.error('Server error');
      }
    },
    onSuccess: () => {
      toast.success('Add to cart successfully')
    }
  })

  const handleAddToCart = (productId: number) => {
    if (addToCartMutation.isPending) return;
    addToCartMutation.mutate(productId);
  }

  const { isLoading, isError } = useQuery({
    queryKey: ['product'],
    queryFn: async () => {
      const data = await getOneProduct(Number(productId));
      setProductDetails(data);
      DetailsProductMeta.title = data.productId.name; 
      return data;
    },
  })

  if (isLoading) return <div>Loading...</div>
  if (isError || !productDetails) return <div>Not found</div>

  return (
    <DocumentMeta {...DetailsProductMeta}>
    <div className="p-2">
            <div className="flex flex-wrap items-center gap-2 border-b-2 pb-1">
              <div className="font-bold text-2xl text-gray-800">{productDetails.productId.name}</div>
              <div className="flex items-center gap-3">
                <ReactStars
                    count={5}
                    value={Number(productDetails.productId.rate)}
                    size={35}
                    edit={false}
                    activeColor="#ffd700"
                  />
              </div>
            </div>
            <div className="flex flex-wrap py-3 px-2 gap-2 justify-between mb-2 md:mb-10">
              <div className="md:w-3/12 w-full flex flex-col justify-center items-center">
                <img src={productDetails.productId.image || phone} className="object-fit"/>
              </div>
              <div className="flex flex-col md:w-4/12 w-full">
                <div className="flex justify-between flex-wrap">
                  {
                    productDetails.productId?.price && productDetails.productId?.discount && (
                      <>
                        <span className="text-red-600 font-bold text-xl">{convertToVND(productDetails.productId.price * (100 - productDetails.productId.discount) / 100)}</span>
                        <s className="text-lg">{convertToVND(productDetails.productId.price)}</s>
                      </>
                    )
                  }
                </div>
                <div className="border pt-2 pb-4 px-3 mt-3 rounded-sm">
                  <p className="font-semibold text-sm">KHUYẾN MÃI</p>
                  <div className="flex gap-1 mt-2">
                    <AiFillCheckCircle className="text-green-600 w-8"/>
                    <p className="text-xs font-normal">Khách hàng sẽ được thử máy miễn phí tại cửa hàng. Có thể đổi trả lỗi trong vòng 2 tháng.</p>
                  </div>
                </div>
                <div className="border pt-2 pb-4 px-3 mt-3 rounded-sm text-sm ">
                  <div className="border-b-2 border-gray-100 flex gap-1 pb-2">
                    <FaBoxOpen  className="w-8 mt-1"/>
                    <p className="text-sky-500">Trong hộp có: Sạc, Tai nghe, Sách hướng dẫn, Cây lấy sim, Ốp lưng.</p>
                  </div>
                  <div className="border-b-2 border-gray-100 flex gap-1 pb-2 mt-2">
                    <FaMedal className="w-5 mt-1"/>
                    <p className="text-sky-500">Bảo hành chính hãng 12 tháng.</p>
                  </div>
                  <div className=" border-gray-100 flex gap-1 pb-2 mt-2">
                    <FaExchangeAlt className="w-8 mt-1"/>
                    <p className="text-sky-500">1 đổi 1 trong 1 tháng nếu lỗi, đổi sản phẩm tại nhà trong 1 ngày.</p>
                  </div>
                </div>
                <button className="shadow-lg ease-in border pb-2 pt-1 mt-3 rounded bg-gradient-to-b from-amber-500 to-orange-500 hover:to-amber-500 hover:from-orange-500 text-white flex flex-col items-center"
                  onClick={() => handleAddToCart(productDetails.productId.productId)}
                >
                    <p className="text-base font-bold flex gap-2 items-center">
                      <FaCartPlus />
                      <span>Thêm vào giỏ hàng</span>
                    </p>
                    <span className="text-xs">Giao trong 1 giờ hoặc nhận tại cửa hàng</span>
                </button>
              </div>

              <div className="md:w-4/12 w-full border py-1 px-2 rounded-sm mt-10 md:mt-0">
                <div className="font-bold text-center text-xl mb-2">Thông số kỹ thuật</div>

                {/* List */}
                <div className="border-t-2 border-gray-100 flex items-center justify-between">
                  <p className="text-gray-500 font-medium py-2 px-1 w-6/12">Màn hình</p>
                  <p className="w-6/12">{productDetails.screen}</p>
                </div>
                <div className="border-t-2 border-gray-100 flex items-center justify-between">
                  <p className="text-gray-500 font-medium p-2 w-6/12">Hệ điều hành</p>
                  <p className="w-6/12">{productDetails.os}</p>
                </div>
                <div className="border-t-2 border-gray-100 flex items-center justify-between">
                  <p className="text-gray-500 font-medium p-2 w-6/12">Camera sau</p>
                  <p className="w-6/12">{productDetails.cameraBehind}</p>
                </div>
                <div className="border-t-2 border-gray-100 flex items-center justify-between">
                  <p className="text-gray-500 font-medium p-2 w-6/12">Camera trước</p>
                  <p className="w-6/12">{productDetails.cameraFront}</p>
                </div>
                <div className="border-t-2 border-gray-100 flex items-center justify-between">
                  <p className="text-gray-500 font-medium p-2 w-6/12">CPU</p>
                  <p className="w-6/12">{productDetails.cpu}</p>
                </div>
                <div className="border-t-2 border-gray-100 flex items-center justify-between">
                  <p className="text-gray-500 font-medium p-2 w-6/12">RAM</p>
                  <p className="w-6/12">{productDetails.ram}</p>
                </div>
                <div className="border-t-2 border-gray-100 flex items-center justify-between">
                  <p className="text-gray-500 font-medium p-2 w-6/12">ROM</p>
                  <p className="w-6/12">{productDetails.rom}</p>
                </div>
                <div className="border-t-2 border-gray-100 flex items-center justify-between">
                  <p className="text-gray-500 font-medium p-2 w-6/12">Dung lượng pin</p>
                  <p className="w-6/12">{productDetails.battery}</p>
                </div>
              {/* end list */}
              </div>
            </div>

            {/* comments */}
            <CommentList
              productId={productId}
            />

            <ProductFrame
              title='* BẠN CÓ THỂ THÍCH *' 
            />
            <ScrollButton /> 
          </div>
    </DocumentMeta>
  )
}

export default ProductDetails