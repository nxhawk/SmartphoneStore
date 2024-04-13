const Contact = () => {
  return (
    <div className="py-5">
      <div className="flex">
          <div className="w-5/12 bg-neutral-500 p-6 text-white rounded-l-3xl">
            <div className="text-2xl font-bold mb-4">Thông tin liên hệ</div>
            <div className="text-base mb-10">Gửi phản hồi của bạn vào form. Chúng tôi sẽ trả lời sớm nhất cho bạn!</div>
            <div className="">
              <div className="flex gap-2 my-4">
                <p className="text-amber-400">Số điện thoại:</p>
                <p>0123456789</p>
              </div>
              <div className="flex gap-2 my-4">
                <p className="text-amber-400">Email:</p>
                <p>admin@gmail.com</p>
              </div>
              <div className="flex gap-2 my-4">
                <p className="text-amber-400">Địa chỉ:</p>
                <p>Linh Trung, Thủ Đức, TP Hồ Chí Minh</p>
              </div>
            </div>
          </div>
          <div className="w-7/12 bg-neutral-50 p-6 rounded-r-3xl">
            <div className="text-2xl font-bold mb-4">Gửi phản hồi cho chúng tôi</div>
            <form>
              <div className="grid grid-cols-2 gap-5">
                <input className="border p-4 rounded-3xl shadow-inner focus:outline-0" placeholder="First Name"/>
                <input className="border p-4 rounded-3xl shadow-inner focus:outline-0" placeholder="Last Name"/>
                <input className="border p-4 rounded-3xl shadow-inner focus:outline-0" placeholder="Mail"/>
                <input className="border p-4 rounded-3xl shadow-inner focus:outline-0" placeholder="Phone Number"/>
              </div>
              <textarea className="rounded-3xl h-40 mt-5 p-6 w-full focus:outline-0 shadow-inner border" placeholder="Write your message"/>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-3xl w-full mt-2">
                Send Message
              </button>
            </form>
          </div>
      </div>
    </div>
  )
}

export default Contact