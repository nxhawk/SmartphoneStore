import DocumentMeta from "react-document-meta"
import CustomMarquee from "../components/CustomMarquee"
import about from "../constants/data.json"
import { AboutMeta } from "../utils/meta"
import { useTranslation } from "react-i18next"

const About = () => {
  const [t] = useTranslation("global");

  return (
    <DocumentMeta {...AboutMeta}>
      <CustomMarquee message={t('navbar.AboutText')}/>
      <div className="py-5 px-2 md:px-5 grid lg:grid-cols-2 grid-cols-1 gap-6 my-2">
        {
          about["about"].map((item, key)=>
          <div key={key} className={`border p-3 rounded-lg shadow-md`}
            style={{backgroundColor: item.color}}
          >
            <p className="font-bold text-2xl mb-2">{item.title}</p>
            <p>{item.description}</p>
          </div>
          )
        }
      </div>
    </DocumentMeta>
  )
}

export default About