import React, { useContext, useState } from 'react'
import { FeedRefresh } from '../../contexts/FeedRefreshContext'
import { RegionContext } from '../../contexts/RegionContext'

function Filter() {
    const [modelopen, setmodelopen] = useState(false)
    const [region, setregion] = useContext(RegionContext)
    const [feedrefresh, setfeedrefresh] = useContext(FeedRefresh)
    return (
        <div>
            <div className="h-full relative items-center flex">
                <div className="w-56 flex items-center relative rounded-lg shadow-xl bg-gradient-to-t from-white to-gray-100 h-14" onClick={()=>{
                    setmodelopen(!modelopen)
                }} >
                    {region?<p className="pl-6  text-md select-none font-normal">{region}</p>:<p className="pl-6  text-md select-none font-normal">Filter by Region</p>}
                    {!modelopen?<svg xmlns="http://www.w3.org/2000/svg" className="h-5 absolute right-4 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 absolute right-4 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>}
                </div>
{modelopen?
                <div className="w-56 p-2 z-30 h-56 absolute top-24">
                    <div className="h-full w-full items-center py-2 flex flex-col bg-white rounded-xl shadow-2xl">
                        <p className="my-auto select-none text-gray-700 text-lg hover:text-blue-900 cursor-pointer" onClick={()=>{
                            setregion("Africa")
                            setmodelopen(false)
                            setfeedrefresh(feedrefresh + 1)
                        }}>Africa</p>
                        <p className="my-auto select-none text-gray-700 text-lg hover:text-blue-900 cursor-pointer" onClick={()=>{
                            setregion("Americas")
                            setmodelopen(false)
                            setfeedrefresh(feedrefresh + 1)
                        }}>Americas</p>
                        <p className="my-auto select-none text-gray-700 text-lg hover:text-blue-900 cursor-pointer" onClick={()=>{
                            setregion("Asia")
                            setmodelopen(false)
                            setfeedrefresh(feedrefresh + 1)
                        }}>Asia</p>
                        <p className="my-auto select-none text-gray-700 text-lg hover:text-blue-900 cursor-pointer" onClick={()=>{
                            setregion("Europe")
                            setmodelopen(false)
                            setfeedrefresh(feedrefresh + 1)
                        }}>Europe</p>
                        <p className="my-auto select-none text-gray-700 text-lg hover:text-blue-900 cursor-pointer" onClick={()=>{
                            setregion("Oceania")
                            setmodelopen(false)
                            setfeedrefresh(feedrefresh + 1)
                        }}>Oceania</p>
                        <p className="my-auto select-none text-red-700 text-md font-mono pt-2 hover:text-blue-900 cursor-pointer" onClick={()=>{
                            setregion(false)
                            setmodelopen(false)
                            setfeedrefresh(feedrefresh + 1)
                        }}>Clear Filter</p>
                    </div>
                </div>
                :null}
            </div>  
        </div>
    )
}

export default Filter
