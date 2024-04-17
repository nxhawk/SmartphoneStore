const ForgotPassword = () => {
  return (
    <div className='min-h-screen bg-gray-200 flex justify-center items-center px-1'>
      <div className='flex flex-col items-center'>
        <div className='text-4xl font-semibold mb-3'>Reset password</div>
        <div className='text-xl md:text-2xl font-thin mb-5'>Enter your email to reset your password.</div>
        <div className='shadow-lg p-8 md:p-10 rounded-lg flex flex-col bg-white'>
          <label className='text-lg mb-1'>Email</label>
          <input type='email' placeholder='Enter your email' 
          className='mb-6 border px-3 text-xl py-2 rounded outline-none md:w-96'
          required
          />
          <div className='flex items-center justify-center'>
            <button className='rounded bg-blue-600 w-fit text-white px-4 py-2 text-lg hover:bg-blue-700 shadow'>Get Code</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword