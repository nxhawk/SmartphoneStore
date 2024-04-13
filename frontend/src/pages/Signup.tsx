import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center w-100 mt-2'>
      <Link to={'/'}>
        <img src={logo} alt="logo" className='w-80 mb-4'/>
      </Link>
      <form className='border p-10 rounded-md bg-white shadow-xl drop-shadow-xl'>
        <div className='font-bold text-2xl mb-5'>Create Account</div>
        <div className='flex flex-col mb-2'>
          <label className='text-slate-600 mb-1'>FullName</label>
          <input type='text' className='border p-2 w-100 focus:outline-none focus:ring focus:border-blue-500 rounded'/>
        </div>
        <div className='flex flex-col mb-2'>
          <label className='text-slate-600 mb-1'>E-Mail Address</label>
          <input type='text' className='border p-2 w-100 focus:outline-none focus:ring focus:border-blue-500 rounded'/>
        </div>
        <div className='flex flex-col mb-2'>
          <label className='text-slate-600 mb-1'>Password</label>
          <input type='pasword' className='border p-2 w-100 focus:outline-none focus:ring focus:border-blue-500 rounded'/>
        </div>
        <div className='flex flex-col mb-5'>
          <label className='text-slate-600 mb-1'>Retype Password</label>
          <input type='password' className='border p-2 w-100 focus:outline-none focus:ring focus:border-blue-500 rounded'/>
        </div>
        <div className='flex flex-col mb-2'>
          <label className='text-slate-600 mb-1'>Phonenumer</label>
          <input type='text' className='border p-2 w-100 focus:outline-none focus:ring focus:border-blue-500 rounded'/>
        </div>
        <div className=''>
          <p className='text-slate-500 text-sm mb-2 text-wrap'>By registering you agree with our terms and condition.</p>
          <div className='flex justify-end'>
            <button className='border p-2 px-4 rounded-md bg-sky-500 text-white'>Signup</button>
          </div>
        </div>
      </form>
      <div className='mt-2 mb-5'>
      Already have an account? {" "}
        <Link to={'/auth/login'} className='underline'>Login</Link>
      </div>
    </div>
  )
}

export default Signup