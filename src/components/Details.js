import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { SearchTerm } from '../contexts/SearchTermContext';

function Details() {
    const [result, setresult] = useState([])
    const [loading, setloading] = useState(false)
    const [, setsearchterm] = useContext(SearchTerm)
    const history = useHistory()
    useEffect(() => {
        setloading(true)
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const name = urlParams.get('name')
        console.log(name);
        axios.get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`).then((data) => {
            setresult(data.data)
            setloading(false)
            console.log(data.data);
        })

    }, [])


    return (
        <div className="relative">
            {loading?<div className="absolute w-full h-full flex ">
            <p className="mx-auto mt-20 text-3xl font-mono font-bold animate-ping">Loading...</p>
            </div>:null}
            <button className="md:ml-20 ml-10 mt-10 flex items-center px-4 rounded-md py-1 hover:bg-gray-300 bg-gray-200" onClick={()=>{
                history.push('/')
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 -ml-2 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
              Back  
            </button>
            {
                result.map((obj)=>{
                    return (
                        <div className="w-full md:p-10 space-x-10 md:flex">
                            <div className="w-full md:w-1/2 p-10 ">
                                <img className="" src={obj.flag} alt="" width="651px" height="501px" />
                            </div>
                            <div className="w-full md:w-1/2 p-5 md:p-10 pl-2 md:pl-16 ">
                            <p className="text-4xl pt-5 md:pt-20 font-extrabold pb-5" >{obj.name}</p>
                            <div className="md:grid md:grid-cols-2 md:grid-flow-row">
                                <div className="space-y-4">
                                    <p className="text-lg pt-2 font-light">Native Name:<b className="pl-2 font-extrabold font-mono">{obj.nativeName}</b></p>
                                    <p className="text-lg pt-2 font-light">Population: <b className="pl-2 font-extrabold font-mono">{obj.population}</b></p>
                                    <p className="text-lg pt-2 font-light">Region: <b className="pl-2 font-extrabold font-mono">{obj.region}</b></p>
                                    <p className="text-lg pt-2 font-light">Sub Region:<b className="pl-2 font-extrabold font-mono">{obj.subregion}</b></p>
                                    <p className="text-lg pt-2 font-light">Capital: <b className="pl-2 font-extrabold font-mono">{obj.capital}</b></p>
                                </div>
                                <div className=" space-y-4">
                                    <p className="text-lg pt-2 md:mt-0 mt-3 font-light">Area: <b className="pl-2 font-extrabold font-mono">{obj.area}</b></p>
                                    <p className="text-lg pt-2 font-light">Currency:<b className="pl-2 font-extrabold font-mono">{obj.currencies[0].code}</b></p>
                                    <p className="text-lg pt-2 font-light">Languages: <b className="pl-2 font-extrabold font-mono">
                                        <div>

                                        {
                                            obj.languages.map((obj2)=>{
                                                return(
                                                    <p className="bg-gray-300 float-left mr-2  px-3 py-1 rounded-2xl">{obj2.name}</p>
                                                    )
                                                })
                                            }
                                        </div>
                                        </b></p>
                                </div>
                            </div>

                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Details
