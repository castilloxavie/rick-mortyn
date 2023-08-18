export const Pagination = ({pages, setCurrentPage,currentPage}) => {
  return (
    <ul className="flex place-content-center text-red-50 p-10 space-x-3">
        {
            pages.map((page) => 
            <li className={`${currentPage === page && " bg-white rounded-full flex flex-wrap text-green-500  "}`} onClick={() => setCurrentPage(page)} key= {page}> {page}</li>)
        }
    </ul>
  )
}
