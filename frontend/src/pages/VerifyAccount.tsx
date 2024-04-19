import { Link } from "react-router-dom"
import verify from '../assets/images/verify/success.png';
import verifyEmail from '../assets/images/verify/email-success.png';

const VerifyAccount = () => {
  return (
    <div className="min-h-screen bg-blue-300 flex items-center justify-center p-2">
      <div className="shadow-2xl rounded-xl bg-white relative">
        <div className="absolute -top-6 w-full flex justify-center">
          <img src={verify} className="w-20"/>
        </div>
        <div className="rounded-t-lg p-5 pb-0 flex justify-center flex-col items-center mt-8">
          <div className="text-3xl font-semibold mb-7">Congratulations</div>
          <img src={verifyEmail} className="w-40"/>
        </div>
        <div className="pt-5 px-16 pb-5 flex flex-col items-center">
          <p className="font-base text-lg text-center mb-2">Your account is verified successfully!</p>
          <p>Are you ready to join with us?</p>
          <Link to={'/auth/login'}
          className="ease-in-out duration-300 mt-6 rounded-xl border border-green-600 text-green-600 font-semibold px-5 py-2 hover:bg-green-600 hover:text-white text-lg"
          >Login now</Link>
        </div>
      </div>
    </div>
  )
}

export default VerifyAccount