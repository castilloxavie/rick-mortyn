import axios from "axios"
import { useEffect, useState } from "react"

const ResidentCard = ({residentUrl}) => {

  const [residentInfo, setResidentInfo] = useState(null)

  const residentStatus = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-slate-500",
  };

  useEffect(() => {
    axios
      .get(residentUrl)
      .then(({data}) => setResidentInfo(data))
      .catch((err) => console.log(err))
  }, [])
  
    
  
  return (
    <article className="border-2 border-lime-300  rounded-xl">
        <header className="">
          <div className="rounded-t-xl w-full h-full block  object-contain">
            <img className="min-h[407px] overflow-hidden rounded-t-xl w-full" src={residentInfo?.image} alt="" />
          </div>
          
          <div className="flex items-center gap-2 p-2">
            <div className={`h-[10px] aspect-square bg-green-500 rounded-full ${residentStatus[residentInfo?.status]}`}></div>
            {residentInfo?.status}
          </div>
        </header>
        <section className=" text-orange-50 p-2 rounded-b-xl max-w-[300px]">
          <h3>{residentInfo?.name}</h3>
          <ul className="text-left">
            <li>Species: {residentInfo?.species}</li>
            <li >Origin: {residentInfo?.origin.name}</li>
            <li>Times appea: {residentInfo?.episode.length}</li>
          </ul>
        </section>
    </article>
  )
}
export default ResidentCard