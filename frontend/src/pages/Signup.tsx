import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo-removebg.png';

import * as yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { registerUser } from '../store/user';
import { toast } from 'react-toastify';
import { useState } from 'react';

import DocumentMeta from 'react-document-meta';
import {SignupMeta} from '../utils/meta';

const SignupSchema = yup.object().shape({
  email: yup.string()
  .email("Email should be valid")
  .required('Email is required'),
  password: yup.string()
  .required('Password is required')
  .min(8, "Password must be at least 8 characters"),
  rePassword: yup.string()
  .required('Retype Password is required')
  .min(8, "Password must be at least 8 characters")
  .oneOf([yup.ref('password')], 'Your passwords do not match.'),
  name: yup.string()
  .required('Fullname is required'),
  phoneNumber: yup.string()
  .required('Phone Number is required')
  .length(10, "Phone Number must be 10 characters"),
});


const Signup = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
      rePassword:"",
      name: "",
      phoneNumber: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      if (isLoading) return;
      setIsLoading(true);
      const res = await dispatch(
        registerUser({
          name: values.name,
          phoneNumber: values.phoneNumber,
          email: values.email,
          password: values.password,
        })
      );
      setIsLoading(false);
      if (res.meta.requestStatus=='rejected'){
        toast.error('Email is already rejected')
      }else if (res.meta.requestStatus=='fulfilled'){
        navigate('/auth/success');
      }
    }
  })

  return (
    <DocumentMeta {...SignupMeta}>
      <div className='flex flex-col items-center justify-center w-100 mt-2'>
        <Link to={'/'}>
          <img src={logo} alt="logo" className='w-80 mb-4'/>
        </Link>
        <form onSubmit={formik.handleSubmit} className='border p-10 rounded-md bg-white shadow-xl drop-shadow-xl'>
          <div className='font-bold text-2xl mb-5'>Create Account</div>
          <div className='flex flex-col mb-2'>
            <label className='text-slate-600 mb-1'>FullName</label>
            <input
            value={formik.values.name}
            onChange={formik.handleChange('name')}
            onBlur={formik.handleBlur('name')}
            type='text' className='border p-2 w-100 focus:outline-none focus:ring focus:border-blue-500 rounded'/>
            <div className='text-red-500 text-sm'>
              {
                formik.touched.name && formik.errors.name
              }
            </div>
          </div>
          <div className='flex flex-col mb-2'>
            <label className='text-slate-600 mb-1'>E-Mail Address</label>
            <input
            value={formik.values.email}
            onChange={formik.handleChange('email')}
            onBlur={formik.handleBlur('email')}
            type='email' className='border p-2 w-100 focus:outline-none focus:ring focus:border-blue-500 rounded'/>
            <div className='text-red-500 text-sm'>
              {
                formik.touched.email && formik.errors.email
              }
            </div>  
          </div>
          <div className='flex flex-col mb-2'>
            <label className='text-slate-600 mb-1'>Password</label>
            <input
            value={formik.values.password}
            onChange={formik.handleChange('password')}
            onBlur={formik.handleBlur('password')}
            type='password' className='border p-2 w-100 focus:outline-none focus:ring focus:border-blue-500 rounded'/>
            <div className='text-red-500 text-sm'>
              {
                formik.touched.password && formik.errors.password
              }
            </div>
          </div>
          <div className='flex flex-col mb-5'>
            <label className='text-slate-600 mb-1'>Retype Password</label>
            <input
            value={formik.values.rePassword}
            onChange={formik.handleChange('rePassword')}
            onBlur={formik.handleBlur('rePassword')}
            type='password' className='border p-2 w-100 focus:outline-none focus:ring focus:border-blue-500 rounded'/>
            <div className='text-red-500 text-sm'>
              {
                formik.touched.rePassword && formik.errors.rePassword
              }
            </div>
          </div>
          <div className='flex flex-col mb-2'>
            <label className='text-slate-600 mb-1'>Phonenumer</label>
            <input 
            value={formik.values.phoneNumber}
            onChange={formik.handleChange('phoneNumber')}
            onBlur={formik.handleBlur('phoneNumber')}
            type='text' className='border p-2 w-100 focus:outline-none focus:ring focus:border-blue-500 rounded'/>
            <div className='text-red-500 text-sm'>
              {
                formik.touched.phoneNumber && formik.errors.phoneNumber
              }
            </div>
          </div>
          <div className=''>
            <p className='text-slate-500 text-sm mb-2 text-wrap'>By registering you agree with our terms and condition.</p>
            <div className='flex justify-end'>
              <button type='submit' className={`border p-2 px-4 rounded-md bg-sky-500 text-white hover:bg-sky-600 ease-in-out shadow ${isLoading&&'opacity-40'}`}>Signup</button>
            </div>
          </div>
        </form>
        <div className='mt-2 mb-5'>
        Already have an account? {" "}
          <Link to={'/auth/login'} className='underline'>Login</Link>
        </div>
      </div>
    </DocumentMeta>
  )
}

export default Signup