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
import { useTranslation } from "react-i18next";
import InputOrder from "./InputOrder";
import * as yup from 'yup'
import { useFormik } from 'formik'

const OrderSchema = yup.object().shape({
  reciverName: yup.string()
  .required('name is required'),
  address: yup.string()
  .required('address is required'),
  phoneNumber: yup.string()
  .required('phone number is required')
  .length(10, 'length is 10'),
  notes: yup.string(),
  payMethod: yup.string()
  .required('pay method is required')
});

const OrderUserInfo = () => {
  const [t] = useTranslation('global');

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      reciverName: "",
      address: "",
      phoneNumber: "",
      notes: "",
      payMethod: "",
    },
    validationSchema: OrderSchema,
    onSubmit: async (values) => {
      console.log(JSON.stringify(values));
    }
  })

  return (
    <div className="rounded-lg shadow-lg px-4 pt-1 pb-4 mb-8">
      <div className="mb-3 font-bold text-lg text-center">{t('page.cart.confirm')}</div>
      <form onSubmit={formik.handleSubmit}>
        <InputOrder
          name={t('page.cart.fullname')}
          placeholder="Nguyễn Văn A"
          type="text"
          id="name"
          value={formik.values.reciverName}
          onChange={formik.handleChange('reciverName')}
          onBlur={formik.handleBlur('reciverName')}
          isError={ formik.touched.reciverName}
          error={formik.errors.reciverName}
        >
          <ImUsers />
        </InputOrder>
        <InputOrder
          name={t('page.cart.address')}
          placeholder="Thủ Đức, Thành phố Hồ Chí Minh"
          type="text"
          id="address"
          value={formik.values.address}
          onChange={formik.handleChange('address')}
          onBlur={formik.handleBlur('address')}
          isError={ formik.touched.address}
          error={formik.errors.address}
        >
          <AiFillHome />
        </InputOrder>
        <InputOrder
          name={t('page.cart.phoneNumber')}
          placeholder="+845010203"
          type="text"
          id="phoneNumber"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange('phoneNumber')}
          onBlur={formik.handleBlur('phoneNumber')}
          isError={ formik.touched.phoneNumber}
          error={formik.errors.phoneNumber}
        >
          <BsTelephoneFill />
        </InputOrder>
        <InputOrder
          name={t('page.cart.note')}
          placeholder="Ghi chú thêm..."
          type="text"
          id="note"
          value={formik.values.notes}
          onChange={formik.handleChange('notes')}
          onBlur={formik.handleBlur('notes')}
          isError={ formik.touched.notes}
          error={formik.errors.notes}
        >
          <HiMiniPencilSquare className="text-xl" />
        </InputOrder>

        <div className="mb-3">
          <FormControl className="w-full" required>
            <label htmlFor="note" className="text-gray-600 font-semibold px-1 flex gap-2 items-center">
              <FaMoneyCheck className="text-xl" />
              <span>{t('page.cart.paymentMethods')}</span>
            </label>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              value={formik.values.payMethod}
              onChange={formik.handleChange('payMethod')}
              onBlur={formik.handleBlur('payMethod')}
            >
              <div className="flex gap-10 text-black px-2 w-full justify-start">
                <FormControlLabel value="offline" control={<Radio />} label={t('page.cart.cash')}/>
                <FormControlLabel value="online" control={<Radio />} label="Online" />
              </div>
            </RadioGroup>
            <div className='px-2 font-semibold text-red-500 text-sm'>
              {
                formik.touched.payMethod && formik.errors.payMethod
              }
            </div>
          </FormControl>
        </div>
        <hr className="border-gray-700 mb-4"/>
        <div className="flex items-center justify-between">
          <p className="font-bold">{t('page.cart.total')}:</p>
          <p className="font-bold text-red-700 lg:text-xl text-lg">{convertToVND(245000000)}</p>
        </div>
        <button className="shadow rounded mt-8 w-full text-center bg-amber-600 py-1 font-medium text-white text-lg hover:bg-amber-700"
        type="submit"
        >{t('page.cart.orderConfirm')}</button>
      </form>
    </div>
  )
}

export default OrderUserInfo