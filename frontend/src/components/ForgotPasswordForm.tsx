interface Props {
  email: string;
  handleOppenResetPassPage: () => void;
  setEmail: React.Dispatch<React.SetStateAction<string>>
  isLoading: boolean;
}

const ForgotPasswordForm = ({ email, handleOppenResetPassPage, setEmail,isLoading }: Props) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='text-4xl font-semibold mb-3'>Reset password</div>
      <div className='text-xl md:text-2xl font-thin mb-5 text-center'>Enter your email to reset your password.</div>
      <div className='shadow-lg p-8 md:p-10 rounded-lg flex flex-col bg-white'>
        <label className='text-lg mb-1'>Email</label>
        <input 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type='email' placeholder='Enter your email' 
        className='mb-6 border px-3 text-xl py-2 rounded outline-none md:w-96'
        required
        />
        <div className='flex items-center justify-center'>
          <button onClick={handleOppenResetPassPage} className={`rounded bg-blue-600 w-fit text-white px-4 py-2 text-lg hover:bg-blue-700 shadow ${isLoading&&'opacity-40'}`}>Get Code</button>
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordForm