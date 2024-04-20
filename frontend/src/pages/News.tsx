import DocumentMeta from "react-document-meta"
import CustomMarquee from "../components/CustomMarquee"
import SingleNews from "../components/SingleNews"
import news from "../constants/data.json"
import { NewsMeta } from "../utils/meta"

const News = () => {
  return (
    <DocumentMeta {...NewsMeta}>
      <CustomMarquee message="Các tin tức mới nhất về SMART PHONE"/>
      <div className="grid grid-cols-1 p-2 lg:grid-cols-2 gap-4 mt-4 mb-10">
        {
          news["news"]?.map((item, key) =>
            <SingleNews 
              key={key} 
              banner={item.banner}
              link={item.link}
              title={item.title}
              from={item.from}
              time={item.time}
            />
          )
        }
      </div>
    </DocumentMeta>
  )
}

export default News