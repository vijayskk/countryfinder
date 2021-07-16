import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FeedRefresh } from '../contexts/FeedRefreshContext'
import { RegionContext } from '../contexts/RegionContext'
import { SearchTerm } from '../contexts/SearchTermContext'
var Spinner = require('react-spinkit');

function Feed() {
    const [result, setresult] = useState([])
    const history = useHistory()
    const [region, ] = useContext(RegionContext)
    const [feedrefresh, ] = useContext(FeedRefresh)
    const [searchterm,setsearchterm] = useContext(SearchTerm)
    const [loading, setloading] = useState(false)
    useEffect(() => {
        if(!(searchterm === "")){
            setresult([])
            setloading(true)
            axios.get(`https://restcountries.eu/rest/v2/name/${searchterm}`).then(data=>{
                console.log(data.data);
                setresult(data.data)
                setloading(false)
            })
        }
        else if (region) {
            setresult([])
            setloading(true)
            axios.get(`https://restcountries.eu/rest/v2/region/${region}`).then(data=>{
                console.log(data.data);
                setresult(data.data)
                setloading(false)
            })
        }
        else{
            setresult([])
            setloading(true)
            axios.get('https://restcountries.eu/rest/v2/all').then(data=>{
                console.log(data.data);
                setresult(data.data)
                setloading(false)
            })
        }   
    }, [feedrefresh,region,searchterm])
    return (
        <div className="px-20 pt-20 md:pt-10">
            <div className="w-full relative h-full grid grid-flow-row lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-24 xl:grid-cols-4">
            {loading?<div className="absolute w-full h-full flex ">
                <p className="mx-auto mt-20 text-3xl font-mono font-bold animate-ping">Loading...</p>
            </div>:null}

                {
                    result.map((obj)=>{
                        return (
                            <div className="cursor-pointer" onClick={()=>{
                                history.push(`/details?name=${obj.name}`)
                                setsearchterm("")
                            }}>
                                <img className="" src={obj.flag} alt=""  />
                                <div className="pl-8 pt-6">
                                    <p className="text-xl font-extrabold">{obj.name}</p>
                                    <p className="text-sm pt-5 font-light">Population:<b className="pl-2 font-extrabold font-mono">{obj.population}</b></p>
                                    <p className="text-sm pt-2 font-light">Region: <b className="pl-2 font-extrabold font-mono">{obj.region}</b></p>
                                    <p className="text-sm pt-2 pb-6 font-light">Capital: <b className="pl-2 font-extrabold font-mono">{obj.capital}</b></p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Feed
