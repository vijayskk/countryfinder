import React from 'react'

function Header() {
    return (
        <div className="w-full flex relative flex-grow h-20 shadow-md">
            <p className="pl-6 md:text-2xl my-auto md:pl-20 lg:pl-32 font-bold md:font-extrabold text-black">Where in the world?</p>
            <div className="absolute cursor-pointer right-4 md:right-16 h-full flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="md:h-6 h-4 w-4 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <p className="pl-1 sm:hidden md:inline md:font-medium" >Dark mode</p>
            </div>
        </div>
    )
}

export default Header
