import DocumentMeta from "react-document-meta"
import { ContactMeta } from "../utils/meta"
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [t] = useTranslation("global");

  return (
    <DocumentMeta {...ContactMeta}>
      <div className="py-5">
        <div className="flex justify-center p-2">
            <div className="lg:w-5/12 lg:block hidden bg-neutral-500 p-6 text-white rounded-l-3xl">
              <div className="text-2xl font-bold mb-4">{t('page.contact.title_left')}</div>
              <div className="text-base mb-10">{t('page.contact.desc_left')}</div>
              <div className="">
                <div className="flex gap-2 my-4">
                  <p className="text-amber-400">{t('numberPhone')}:</p>
                  <p>0123456789</p>
                </div>
                <div className="flex gap-2 my-4">
                  <p className="text-amber-400">Email:</p>
                  <p>admin@gmail.com</p>
                </div>
                <div className="flex gap-2 my-4">
                  <p className="text-amber-400">{t('address')}:</p>
                  <p>Linh Trung, Thủ Đức, TP Hồ Chí Minh</p>
                </div>
              </div>
            </div>
            <div className="lg:w-7/12 bg-neutral-50 p-6 lg:rounded-r-3xl rounded-3xl">
              <div className="text-2xl font-bold mb-4">{t('page.contact.title_right')}</div>
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
    </DocumentMeta>
  )
}

export default Contact