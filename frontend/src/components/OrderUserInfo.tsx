import { BsTelephoneFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { ImUsers } from "react-icons/im";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { FaMoneyCheck } from "react-icons/fa";

import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import { convertToVND } from "../utils/helper";

const OrderUserInfo = () => {
  return (
    <div className="rounded-lg shadow-lg px-4 pt-1 pb-4 mb-8">
      <div className="mb-3 font-bold text-lg text-center">Xác nhận thông tin đặt hàng</div>
      <form>
        <div className="mb-3">
          <label htmlFor="address" className="text-gray-600 font-semibold px-1 flex gap-2 items-center">
              <ImUsers />
              <span>Họ và tên người nhận hàng</span>
          </label>
          <input id="name" type="text" className="shadow-lg rounded px-2 py-1 outline-none w-full" placeholder="Nguyễn Văn A" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="text-gray-600 font-semibold px-1 flex gap-2 items-center">
              <AiFillHome />
              <span>Địa chỉ nhận hàng</span>
          </label>
          <input id="address" type="text" className="shadow-lg rounded px-2 py-1 outline-none w-full" placeholder="Thủ Đức, Thành phố Hồ Chí Minh" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="text-gray-600 font-semibold px-1 flex gap-2 items-center">
            <BsTelephoneFill />
            <span>Số điện thoại người nhận</span>
          </label>
          <input id="phoneNumber" type="text" className="shadow-lg rounded px-2 py-1 outline-none w-full" placeholder="+845010203" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="note" className="text-gray-600 font-semibold px-1 flex gap-2 items-center">
            <HiMiniPencilSquare className="text-xl" />
            <span>Ghi chú</span>
          </label>
          <textarea id="note" className="shadow-lg rounded px-2 py-1 outline-none w-full min-h-16 max-h-64" placeholder="Ghi chú thêm..."/>
        </div>
        <div className="mb-3">
          <FormControl className="w-full">
            <label htmlFor="note" className="text-gray-600 font-semibold px-1 flex gap-2 items-center">
              <FaMoneyCheck className="text-xl" />
              <span>Phương thức thanh toán</span>
            </label>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <div className="flex gap-10 text-black px-2 w-full justify-start">
                <FormControlLabel value="offline" control={<Radio />} label="Tiền mặt"/>
                <FormControlLabel value="online" control={<Radio />} label="Online" />
              </div>
            </RadioGroup>
          </FormControl>
        </div>
        <hr className="border-gray-700 mb-4"/>
        <div className="flex items-center justify-between">
          <p className="font-bold">Tổng cộng:</p>
          <p className="font-bold text-red-700 lg:text-xl text-lg">{convertToVND(245000000)}</p>
        </div>
        <button className="shadow rounded mt-8 w-full text-center bg-amber-600 py-1 font-medium text-white text-lg hover:bg-amber-700">Xác nhận đặt hàng</button>
      </form>
    </div>
  )
}

export default OrderUserInfo