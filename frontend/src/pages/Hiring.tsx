import { Link } from 'react-router-dom'
import CustomMarquee from '../components/CustomMarquee'

const Hiring = () => {
  return (
    <div>
        <CustomMarquee message="Yêu cầu tuyển dụng"/>
        <div className='py-6 px-5 md:pt-10 pt-4'>
          <div className='mb-2 text-center text-2xl font-bold text-sky-400'>NHÂN VIÊN BÁN HÀNG</div>
          
          <div className='mb-4'>
            <div className='font-bold text-sky-400'>1. MÔ TẢ</div>
            <div className="shadow-md border-2 border-sky-400 rounded-lg p-2 mt-2 bg-neutral-100">
              <ul>
                <li>- Vui vẻ, lịch sự chào đón khi khách vào cửa hàng.
              </li>
                <li>- Tìm hiểu nhu cầu, tư vấn các thông tin về: Sản phẩm, dịch vụ, chương trình khuyến mãi, hậu mãi cho khách hàng.</li>
                <li>- Sắp xếp sản phẩm gọn gàng, hợp lý, vệ sinh cửa hàng khi hết ca làm việc.</li>
                <li>- Nắm bắt, cập nhật thông tin, tính năng của sản phẩm mới: form sản phẩm, chất liệu, màu sắc, kiểu dáng...</li>
              </ul>
            </div>
          </div>

          <div className='mb-4'>
            <div className='font-bold text-sky-400'>2. THỜI GIAN LÀM VIỆC</div>
            <div className="shadow-md border-2 border-sky-400 rounded-lg p-2 mt-2 bg-neutral-100">
              <ul>
                <li className='text-red-500 font-bold'>- Từ 18h – 21h30 các ngày trong tuần.
              </li>
                <li>- Nghỉ 3 ngày/ tháng.</li>
              </ul>
            </div>
          </div>

          <div className='mb-4'>
            <div className='font-bold text-sky-400'>3. ĐỊA ĐIỂM LÀM VIỆC</div>
            <div className="shadow-md border-2 border-sky-400 rounded-lg p-2 mt-2 bg-neutral-100">
              <ul>
                <li className='text-red-500 font-bold'>- 273 An Dương Vương, phường 3, Quận 5, TPHCM.
              </li>
              </ul>
            </div>
          </div>

          <div className='mb-4'>
            <div className='font-bold text-sky-400'>4. YÊU CẦU</div>
            <div className="shadow-md border-2 border-sky-400 rounded-lg p-2 mt-2 bg-neutral-100">
              <ul>
                <li>- Nam/Nữ, tuổi từ 18 - 25.
                </li>
                <li>- Ngoại hình khá, thân thiện, niềm nở.
                </li>
                <li>- Có kỹ năng giao tiếp, thuyết phục, đàm phán tốt với khách hàng.
                </li>
                <li>- Kiên trì, năng động, trung thực, nhiệt tình.
                </li>
                <li>- Yêu thích công nghệ, giao tiếp, chăm sóc khách hàng. Ưu tiên các ứng viên đã làm việc tại các shop bán điện thoại, điện máy.
                </li>
                <li className='text-red-500 font-bold'>- Số lượng cần tuyển: 02
                </li>
              </ul>
            </div>
          </div>

          <div className='mb-4'>
            <div className='font-bold text-sky-400'>5. QUYỀN LỢI</div>
            <div className="border-2 border-sky-400 rounded-lg p-2 mt-2 bg-neutral-100 shadow-md">
              <ul>
                <li>- Thu nhập: {" "}
                  <span className='text-red-500 font-bold'>
                  3.000.000 - 4.000.000 VNĐ/tháng.
                  </span>
                </li>
                <li>- Hoa hồng hưởng theo doanh thu bán hàng của cửa hàng.
                </li>
                <li>- Thưởng thêm theo tăng trưởng cửa hàng.
                </li>
                <li>- Phụ cấp, thưởng thêm theo chế độ công ty (Làm thêm, gửi xe, sinh nhật, Lễ tết….)
                </li>
                <li>- Hưởng đầy đủ các chính sách theo luật lao động.
                </li>
                <li>- Được đào tạo về chuyên môn & kỹ năng trước khi làm việc.
                </li>
                <li>- Được tiếp xúc với những sản phẩm công nghệ mới nhất hiện nay.
                </li>
              </ul>
            </div>
          </div>

          <div className='mb-4'>
            <div className='font-bold text-sky-400'>6. LIÊN HỆ</div>
            <div className="border-2 border-sky-400 rounded-lg p-2 mt-2 bg-neutral-100 shadow-md">
              <ul>
                <li>- Ứng viên điền thông tin theo link: {" "}
                  <Link target="_blank" to={'https://docs.google.com/forms/d/e/1FAIpQLSdNjF8wP7v7ocBDVRUFGqRCHrV0lNPky33Sn3GXVgSVYe7dMA/viewform'} className='text-red-500 font-bold hover:underline'>
                    Tuyển dụng
                    </Link>
                </li>
                <li>- Hoặc nộp hồ sơ trực tiếp tại {" "}
                  <a target="_blank" href="https://maps.app.goo.gl/PBxStdqRdYFoz7iJ7" className='text-sky-400 font-bold'>Phòng Hành chính nhân sự - 95B Phố Biển, Trần Hưng Đạo, TPHCM.</a>
                </li>
                <li>- Hoặc gửi CV qua email: {" "}
                <a href='mailto:smartphoneshop@gmail.com' className='text-sky-400 font-bold hover:underline'>smartphoneshop@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hiring