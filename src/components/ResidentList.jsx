import { useEffect, useState } from "react";

import { Pagination } from "./Pagination";
import ResidentCard from "./ResidentCard";

const INITIAL_PAGE = 1 

const ResidentList = ({residents, curretLocation}) => {

  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE)

  //cantidad de residentes por pagina
  const RESIDENT_PER_PAGE = 20;

  //cantidad total de paginas
  const totalPage = Math.ceil(residents.length / RESIDENT_PER_PAGE)

  //cantidad de residentes que se vana mostrar por pagina
  const sliceStart = (currentPage - 1) * RESIDENT_PER_PAGE
  const sliceEnd = sliceStart + RESIDENT_PER_PAGE
  const recidedentPage = residents.slice(sliceStart, sliceEnd)

  //generar un arreglo de las paginas que se van a mostrar
  const pages =[]
  for(let x = 1; x <= totalPage; x++){
    pages.push(x)
  }

  useEffect(() => {
    setCurrentPage((INITIAL_PAGE))
  }, [curretLocation])
  
  
 
  return (
    <section className="m-5">
        <section className=" flex flex-wrap gap-5 place-content-center">
          {
            recidedentPage.map((resident) =>  
            <ResidentCard key={resident} residentUrl = {resident} />)
          }
        </section>
        <Pagination pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </section>
    
  )
}

export default ResidentList