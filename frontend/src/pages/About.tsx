import CustomMarquee from "../components/CustomMarquee"
import about from "../constants/data.json"

const About = () => {
  return (
    <div>
      <CustomMarquee message="Chào mừng đến với Thế Giới Di Động!"/>
      <div className="py-5 px-10 grid grid-cols-2 gap-8">
        {
          about["about"].map((item, key)=>
          <div key={key} className={`border p-3 rounded-lg shadow-md ${item.color}`}>
            <p className="font-bold text-2xl mb-2">{item.title}</p>
            <p>{item.description}</p>
          </div>
          )
        }
      </div>
    </div>
  )
}

export default About