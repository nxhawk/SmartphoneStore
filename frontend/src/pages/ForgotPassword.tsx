import { useState } from "react"
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import ResetPasswordForm from "../components/ResetPasswordForm";
import { toast } from 'react-toastify';
import { getCodeForgotPassword } from "../api/user/apiUser";
import { useMutation } from "@tanstack/react-query";
import DocumentMeta from "react-document-meta";
import { ForgotPasswordMeta } from "../utils/meta";

const ForgotPassword = () => {
  const [openResetPassPage, setOpenResetPassPage] = useState(false);
  const [email, setEmail] = useState<string>("");

  const sendMailMutation = useMutation({
    mutationFn: async (email: string) => getCodeForgotPassword(email),
    onError: (err: Error) =>{
      toast.error(err.message)
    },
    onSuccess: () => {
      toast.success("Code had sent you to reset your password", {className:'w-96'})
      setOpenResetPassPage(true);
    },
  })

  const handleOppenResetPassPage = async () => {
    if (sendMailMutation.isPending) return;
    await sendMailMutation.mutate(email);
  }


  return (
    <DocumentMeta {...ForgotPasswordMeta}>
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
              isLoading={sendMailMutation.isPending}
            />
          )
        }
      </div>
    </DocumentMeta>
  )
}

export default ForgotPassword