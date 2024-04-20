import banner from '../assets/images/banners/blackFriday.gif'
import { MdModeEdit } from "react-icons/md";
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import OrderList from '../components/OrderList';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from '../store';
import { toast } from 'react-toastify';
import { changePassword, updateProfile } from '../store/user';
import { Loading } from 'notiflix';
import DocumentMeta from 'react-document-meta';
import { ProfileMeta } from '../utils/meta';

const DetailUser = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: AppState) => state?.user?.user);
  
  // todo: data here
  const [name, setName] = useState(user?.name);
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber);
  const [attachment, setAttachment] = useState<string>(user?.avatar);
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [avatarFile, setAvatarFile] = useState<File|undefined>(undefined);

  const nameRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  
  const [editName, setEditName] = useState<boolean>(false);
  const [editPhoneNumber, setEditPhoneNumber] = useState(false);
  const [openChangePassword, setOpenChangePassword] = useState(false)

  useEffect(() =>{
    if (nameRef.current && editName) nameRef.current.focus();
  },[editName])
  useEffect(() =>{
    if (phoneNumberRef.current && editPhoneNumber) phoneNumberRef.current.focus();
  },[editPhoneNumber])


  const handleUpdateInfo = async() =>{
    if (name.length <= 0 || phoneNumber.length != 10) {
      toast.error("Name or phone number does not correct")
      return;
    }
    // update infomation
    const formData = new FormData();
    formData.append('name', name);
    formData.append('phoneNumber', phoneNumber);
    avatarFile && formData.append('avatar', avatarFile);
    Loading.hourglass();
    const res = await dispatch(updateProfile(formData));
    Loading.remove();
    if (res.meta.requestStatus=='rejected'){
      toast.error('Update profile failed')
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleOnChangeFile = (changeEvent: ChangeEvent<HTMLInputElement>) =>{
    if (!changeEvent.target.files) return;
    
    for (const file of Array.from(changeEvent.target.files)) {
      const reader = new FileReader();

      reader.onload = function (onLoadEvent) {
          setAttachment(
              onLoadEvent.target?.result as string,
          );
      };

      reader.readAsDataURL(file);
      setAvatarFile(file);
    }
  }

  const onChangePassword = async() => {
    if (newPassword.length < 8 || oldPassword.length < 8) {
      toast.error('Password must at least 8 characters');
      return;
    }
    if (newPassword != confirmPassword){
      toast.error('Confirm password does not match with your new password');
      return;
    }

    // call API update password
    const res = await dispatch(changePassword({
      oldPassword,
      newPassword,
    }))

    if (res.meta.requestStatus == 'rejected'){
      toast.error('Old Password do not match',{ className: 'w-72'});
    }else {
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setOpenChangePassword(false);
    }
  }

  return (
    <DocumentMeta {...ProfileMeta}>
      <div className='px-2'>
        <div className='flex justify-center mt-2 mb-3 lg:mb-6'>
          <img src={banner} alt="banner"/>
        </div>
        <div className='flex flex-col items-center md:flex-row'>
          <div className='flex flex-col w-4/12 justify-center items-center'>
            <img src={attachment} alt='avatar' 
            className='w-32 h-32 md:w-60 md:h-60 object-fit'/>
            <input 
            onChange={handleOnChangeFile}
            accept='image/*'
            type="file" className="
              block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
            file:bg-violet-50 file:text-blue-400
            hover:file:bg-violet-100
              outline-none
              mt-2"
            />
          </div>
          <div className='flex-1 w-full p-2'>
            <h1 className='text-center font-bold text-2xl'>THÔNG TIN KHÁCH HÀNG</h1>
            <div className='mt-4'>
              <div className='flex mb-3 gap-2'>
                <p className='font-bold w-4/12 text-end'>Họ và tên:</p>
                {
                  editName?
                  (<input type='text' className='rounded-sm px-2 w-5/12 border' value={name} 
                  ref={nameRef}
                  onChange={(e) => setName(e.target.value)}
                  />)
                  :(<p className='w-5/12 text-center'>{name}</p>)
                }
                
                <div className='w-3/12'>
                  <button className='outline-none flex items-center shadow-md hover:bg-gray-300 rounded px-3 gap-1 py-1' onClick={() =>{
                    setEditName(!editName)
                  }}>
                    <MdModeEdit />
                    {editName && <span className='text-sm'>Đồng ý</span>}
                  </button>
                </div>
              </div>
              <div className='flex mb-3 gap-2'>
                <p className='font-bold w-4/12 text-end'>Số điện thoại:</p>
                {
                  editPhoneNumber?
                  (<input type='text' className='rounded-sm px-2 w-5/12 border' value={phoneNumber} 
                  ref={phoneNumberRef}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  />)
                  :(<p className='w-5/12 text-center'>{phoneNumber}</p>)
                }
                
                <div className='w-3/12'>
                  <button className='outline-none flex items-center shadow-md hover:bg-gray-300 rounded px-3 gap-1 py-1' onClick={() =>
                    setEditPhoneNumber(!editPhoneNumber)
                  }>
                    <MdModeEdit />
                    {editPhoneNumber && <span className='text-sm'>Đồng ý</span>}
                  </button>
                </div>
              </div>
              <div className='flex mb-3 gap-2'>
                <p className='font-bold w-4/12 text-end'>Email:</p>
                <p className='w-5/12 text-center'>{user?.email}</p>
                <span className='w-3/12'></span>
              </div>
              {/* change password */}
              <div className='mb-2'>
                <div className='flex mb-3 gap-2'>
                  <p className='font-bold w-4/12 text-end'>Mật khẩu:</p>
                  <p className='w-5/12 flex justify-center'>
                    <button className='outline-none flex items-center shadow-md hover:bg-gray-300 rounded px-3 gap-1 py-1'
                      onClick={() => setOpenChangePassword(!openChangePassword)}
                    >
                        <MdModeEdit />
                        <span className='text-sm'>Đổi mật khẩu</span>
                    </button>
                  </p>
                  <span className='w-3/12'></span>
                </div>
                <div className="border-y-2">
                  <div className={`py-2 ease-in ${!openChangePassword && 'hidden'}`}>
                    <div className='flex mb-2 gap-2'>
                      <p className='font-bold w-4/12 text-end'>Mật khẩu cũ:</p>
                      <input type='password' className='rounded px-2 w-5/12 border border-gray-400'      
                        value={oldPassword} 
                        onChange={(e) => setOldPassword(e.target.value)}
                      />
                      <span className='w-3/12'></span>
                    </div>
                    <div className='flex mb-2 gap-2'>
                      <p className='font-bold w-4/12 text-end'>Mật khẩu mới:</p>
                      <input type='password' className='rounded px-2 w-5/12 border border-gray-400'      
                        value={newPassword} 
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                      <span className='w-3/12'></span>
                    </div>
                    <div className='flex mb-2 gap-2'>
                      <p className='font-bold w-4/12 text-end'>Xác nhận mật khẩu:</p>
                      <input type='password' className='rounded px-2 w-5/12 border border-gray-400'      
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <span className='w-3/12'></span>
                    </div>
                    <div className='flex gap-2 mb-1'>
                      <p className='w-4/12'></p>
                      <button 
                        onClick={onChangePassword}
                        className='ease-in-out duration-500 border font-medium rounded-lg hover:bg-green-500 hover:border-green-500 bg-gray-300 w-5/12 py-1'
                      >Đồng ý</button>
                      <span className='w-3/12'></span>
                    </div>
                  </div>
                </div>
              </div>
              {/* end change password */}
              <div className='flex mb-1 gap-2'>
                <p className='font-bold w-4/12 text-end'>Số dư tài khoản:</p>
                <p className='w-5/12 text-center'>100.000.000 VNĐ</p>
                <div className='w-3/12'>
                  <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded sm:text-sm text-xs">
                    Nạp tiền
                  </button>
                </div>
              </div>
              <div className='flex mb-3 lg:mb-5 gap-2'>
                <p className='font-bold w-4/12 text-end'>Tổng tiền đã mua:</p>
                <p className='w-5/12 text-center'>0 VNĐ</p>
                <span className='w-3/12'></span>
              </div>
              <div className='flex mb-3 gap-2'>
                <p className='w-4/12'></p>
                <p className='w-5/12 text-center'>
                  <button onClick={handleUpdateInfo} className="shadow-2xl w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded sm:text-base text-xs">
                  Cập nhật thông tin
                  </button>
                </p>
                <span className='w-3/12'></span>
              </div>
            </div>
          </div>
        </div>
        <hr className='mt-2 mb-3'/>
        <div className='mb-5'>
          <div className='text-center mb-3 font-bold text-2xl sm:text-3xl text-gray-800'>DANH SÁCH ĐƠN HÀNG</div>
          <OrderList/>
        </div>
      </div>
    </DocumentMeta>
  )
}

export default DetailUser