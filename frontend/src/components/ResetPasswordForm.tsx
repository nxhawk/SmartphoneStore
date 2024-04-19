import * as yup from 'yup'
import { useFormik } from 'formik'
import { useMutation } from "@tanstack/react-query";
import { toast } from 'react-toastify';
import { resetPassword } from '../api/user/apiUser';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { ServerError } from '../types/global';

const ResetPasswordSchema = yup.object().shape({
  code: yup.string()
  .required('Code is required'),
  password: yup.string()
  .required('Password is required')
  .min(8, "Password must be at least 8 characters"),
  rePassword: yup.string()
  .required('Retype Password is required')
  .min(8, "Password must be at least 8 characters")
  .oneOf([yup.ref('password')], 'Your passwords do not match.'),
});

interface Props {
  email: string;
}

const ResetPasswordForm = ({ email }: Props) => {
  const navigate = useNavigate();

  const resetPasswordMutation = useMutation({
    mutationFn: async ({code, password}: {code: string, password: string}) => resetPassword({
      code,
      password,
    }),
    onError: (error: AxiosError) =>{
      if (error.response) {
        const errorMessage = error.response.data as ServerError;
        toast.error(errorMessage.message || "Server error");
      } else{
        toast.error(error.message);
      }
    },
    onSuccess: () => {
      toast.success("Password reset succesfully", {className:'w-96'})
      setTimeout(() => {
        navigate('/auth/login');
      },300);
    },
  })

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      code:"",
      password: "",
      rePassword:"",
    },
    validationSchema: ResetPasswordSchema,
    onSubmit: async (values) => {
      if (resetPasswordMutation.isPending) return;
      resetPasswordMutation.mutate({
        code: values.code,
        password: values.password,
      })
    }
  })

  return (
    <div className='flex flex-col items-center'>
      <div className='text-4xl font-semibold mb-3'>Reset password</div>
      <div className='text-xl md:text-2xl font-thin mb-5 text-center'>
        Please check your mail: <b>{email}</b> to get code.
      </div>
      <form onSubmit={formik.handleSubmit} className='shadow-lg p-8 pb-6 rounded-lg flex flex-col bg-white'>
        <div className="flex flex-col md:w-96 mb-3">
          <label className='text-lg text-gray-600'>Code</label>
          <input 
          value={formik.values.code}
          onChange={formik.handleChange('code')}
          onBlur={formik.handleBlur('code')}
          type='text' placeholder='Enter code' 
          className='border px-3 text-xl py-2 rounded outline-none'
          required
          />
          <div className='text-red-500 text-sm'>
            {
              formik.touched.code && formik.errors.code
            }
          </div>
        </div>
        <div className="flex flex-col md:w-96 mb-3">
          <label className='text-lg text-gray-600'>New password</label>
          <input 
          value={formik.values.password}
          onChange={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          type='password' placeholder='Enter new password' 
          className='border px-3 text-xl py-2 rounded outline-none'
          required
          />
          <div className='text-red-500 text-sm'>
            {
              formik.touched.password && formik.errors.password
            }
          </div>
        </div>
        <div className="flex flex-col md:w-96 mb-3">
          <label className='text-lg text-gray-600'>Retype new password</label>
          <input 
          value={formik.values.rePassword}
          onChange={formik.handleChange('rePassword')}
          onBlur={formik.handleBlur('rePassword')}
          type='password' placeholder='Enter new password' 
          className='border px-3 text-xl py-2 rounded outline-none'
          required
          />
          <div className='text-red-500 text-sm'>
            {
              formik.touched.rePassword && formik.errors.rePassword
            }
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <button type='submit' className={`rounded bg-blue-500 w-fit text-white px-4 py-2 text-lg hover:bg-blue-700 shadow ${resetPasswordMutation.isPending&&'opacity-40'}`}>Reset Password</button>
        </div>
      </form>
    </div>
  )
}

export default ResetPasswordForm