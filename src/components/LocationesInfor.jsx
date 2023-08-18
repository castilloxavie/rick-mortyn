const LocationesInfor = ({curretLocation}) => {
   
  return (
    <section className="flex flex-col items-center w-80 hb-40 p-5 rounded-[35%] text-lime-300 bg-blue-700 bg-opacity-70 text-center mb-20">
        <h2>{curretLocation?.name}</h2>
        <ul className="">
            <li>Type: {curretLocation?.type}</li>
            <li>Dimension: {curretLocation?.dimension}</li>
            <li>Population: {curretLocation?.residents.length}</li>
        </ul>
    </section>
  )
}
export default LocationesInfor