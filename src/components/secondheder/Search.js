import React, { useContext } from 'react'
import { SearchTerm } from '../../contexts/SearchTermContext'

function Search() {
    const [, setsearchterm] = useContext(SearchTerm)
    return (
        <div className="">
            <div className="p-10">
                <div className="w-full md:w-1/4 flex items-center pl-8 rounded-lg shadow-xl bg-gradient-to-t from-white to-gray-100 h-14">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="gray">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                    <input className="ml-8 bg-transparent focus:outline-none placeholder-opacity-20" type="text" placeholder="Search for a country" onChange={(e)=>{
                        setsearchterm(e.target.value)
                    }} />
                    {/* <button className="bg-gray-200 px-3 py-1 rounded-md ml-4" onClick={setsearchterm("")}>Get_All</button> */}
                </div>
            </div>
        </div>
    )
}

export default Search
