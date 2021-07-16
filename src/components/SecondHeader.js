import React from 'react'
import Filter from './secondheder/Filter'
import Search from './secondheder/Search'

function SecondHeader() {
    return (
        <div className="w-full relative">
            <div className="absolute h-full flex md:top-0 top-20 right-10">
                <Filter />
            </div>
            <Search />
        
        </div>
    )
}

export default SecondHeader
