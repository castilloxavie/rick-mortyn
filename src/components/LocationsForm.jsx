const LocationsForm = ({handleSubmit}) => {
  return (
    <form className="flex justify-center p-5  mt-1"  onSubmit={handleSubmit}>
      <input required type="number" min={undefined} max={126}  id="newLocation" placeholder="Type a location id ....." className="flex flex-col items-center text-black outline-none border-teal-600 bg-green-800 bg-opacity-90 rounded-l-lg w-60 focus:ring-green-500 focus:ring-1" />
      <button className=" bg-slate-900  hover:bg-cyan-900 bg-opacity-70 font-bold border border-teal-600 px-4 rounded-r-lg">Search</button>
    </form>
  )
}
export default LocationsForm