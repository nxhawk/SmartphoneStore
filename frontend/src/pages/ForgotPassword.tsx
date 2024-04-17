import { useState } from "react"
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import ResetPasswordForm from "../components/ResetPasswordForm";
import { toast } from 'react-toastify';
import { getCodeForgotPassword } from "../api/user/apiUser";

const ForgotPassword = () => {
  const [openResetPassPage, setOpenResetPassPage] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false)

  const handleOppenResetPassPage = async () => {
    if (isLoading) return;
    setIsLoading(true);
    await getCodeForgotPassword(email)
    .then(() => {
      toast.success("Code had sent you to reset your password", {className:'w-96'})
      setOpenResetPassPage(true);
    })
    .catch((error) => {
      toast.error(error.message);
    });
    setIsLoading(false);
  }

  return (
    <div className='min-h-screen bg-gray-200 flex justify-center items-center px-1 pb-2'>
      {
        openResetPassPage?(
          <ResetPasswordForm
            email={email}
          />
        ):(
          <ForgotPasswordForm
            email={email}
            setEmail={setEmail}
            handleOppenResetPassPage={handleOppenResetPassPage}
            isLoading={isLoading}
          />
        )
      }
    </div>
  )
}

export default ForgotPassword