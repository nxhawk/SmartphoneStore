import { Link } from "react-router-dom"

const RegisterSuccess = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-1">
      <div className="shadow-2xl rounded-lg">
        <div className="bg-purple-300 rounded-t-lg p-5 flex justify-center">
          <img src="https://cdn-icons-png.flaticon.com/256/3487/3487761.png"/>
        </div>
        <div className="p-6 pb-10 max-w-96 flex flex-col items-center">
          <p className="text-gray-500 font-base text-lg text-center">Register successful. Please check your mail to verify account</p>
          <Link to={'/auth/login'}
          className="mt-6 rounded-full bg-purple-900 text-white font-semibold px-10 py-2 hover:bg-purple-950 shadow-lg hover:shadow-2xl"
          >Login</Link>
        </div>
      </div>
    </div>
  )
}

export default RegisterSuccess