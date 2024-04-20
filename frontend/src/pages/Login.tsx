import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';

import * as yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { loginUser } from '../store/user';
import { toast } from 'react-toastify';
import { useState } from 'react';

import DocumentMeta from 'react-document-meta';
import {LoginMeta} from '../utils/meta';

const LoginSchema = yup.object().shape({
  email: yup.string()
  .email("Email should be valid")
  .required('Email is required'),
  password: yup.string()
  .required('Password is required')
  .min(8, "Password must be at least 8 characters"),
});



const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      if (isLoading) return;
      setIsLoading(true);
      const res = await dispatch(
        loginUser(values)
      );
      setIsLoading(false); 
      if (res.meta.requestStatus=='rejected'){
        toast.error(res.payload.response.data.message || 'Server error');
      }
    }
  })

  return (
    <DocumentMeta {...LoginMeta}>
      <div className='flex flex-col items-center justify-center w-100 m-2'>
        <Link to={'/'}>
          <img src={logo} alt="logo" className='w-80 mb-4'/>
        </Link>

        <div className='border p-10 rounded-md bg-white shadow-xl drop-shadow-xl'>
          <form onSubmit={formik.handleSubmit} >
            <div className='font-bold text-2xl mb-5'>Login Now</div>
            <div className='flex flex-col mb-2'>
              <label className='text-slate-600 mb-1'>E-Mail Address</label>
              <input 
              value={formik.values.email}
              onChange={formik.handleChange('email')}
              onBlur={formik.handleBlur('email')}
              type='email' className='border p-2 w-72 focus:outline-none focus:ring focus:border-blue-500 rounded'/>
              <div className='text-red-500 text-sm'>
                {
                  formik.touched.email && formik.errors.email
                }
              </div>
            </div>
            <div className='flex flex-col mb-5'>
              <label className='text-slate-600 mb-1'>Password</label>
              <input type='password' className='border p-2 w-72 focus:outline-none focus:ring focus:border-blue-500 rounded'
              value={formik.values.password}
              onChange={formik.handleChange('password')}
              onBlur={formik.handleBlur('password')}
              />
              <div className='text-red-500 text-sm'>
                {
                  formik.touched.password && formik.errors.password
                }
              </div>
            </div>
            <div className='flex justify-between'>
              <Link to={'/auth/forgotPassword'} className='text-sky-600 underline'>Forgot Password</Link>
              <button type='submit' className={`border p-2 px-4 rounded-md bg-sky-500 text-white hover:bg-sky-600 ease-in-out shadow ${isLoading&&'opacity-20'}`}>Login</button>
            </div>
          </form>

          <div className='relative m-2 flex flex-col items-center justify-center'>
            <hr className='w-full absolute border-gray-400' style={{top:'0.9rem'}}/>
            <p className='bg-white z-10 px-2'>or</p>
          </div>

          <Link to={`${import.meta.env.VITE_REACT_APP_BASE_URL}/auth/google/login`}
          className='w-full flex items-center justify-center shadow-lg bg-slate-100 rounded py-2 text-gray-700 hover:text-black gap-1 hover:bg-slate-200'>
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" className='w-5'/>
            <p className='uppercase'>Login with google</p>
          </Link>
        </div>


        <div className='mt-2'>
          Don't have an account? {" "}
          <Link to={'/auth/signup'} className='underline'>Create One</Link>
        </div>
      </div>
    </DocumentMeta>
  )
}

export default Login