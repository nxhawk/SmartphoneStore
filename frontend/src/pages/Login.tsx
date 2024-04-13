import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center w-100 mt-2'>
      <Link to={'/'}>
        <img src={logo} alt="logo" className='w-80 mb-4'/>
      </Link>
      <form className='border p-10 rounded-md bg-white shadow-xl drop-shadow-xl'>
        <div className='font-bold text-2xl mb-5'>Login Now</div>
        <div className='flex flex-col mb-2'>
          <label className='text-slate-600 mb-1'>E-Mail Address</label>
          <input type='text' className='border p-2 w-72 focus:outline-none focus:ring focus:border-blue-500 rounded'/>
        </div>
        <div className='flex flex-col mb-5'>
          <label className='text-slate-600 mb-1'>Password</label>
          <input type='password' className='border p-2 w-72 focus:outline-none focus:ring focus:border-blue-500 rounded'/>
        </div>
        <div className='flex justify-between'>
          <Link to={'/'} className='text-sky-600 underline'>Forgot Password</Link>
          <button className='border p-2 px-4 rounded-md bg-sky-500 text-white'>Login</button>
        </div>
      </form>
      <div className='mt-2'>
        Don't have an account? {" "}
        <Link to={'/auth/signup'} className='underline'>Create One</Link>
      </div>
    </div>
  )
}

export default Login