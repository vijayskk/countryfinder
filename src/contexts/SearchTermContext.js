import { createContext, useState } from "react";

export const SearchTerm = createContext()

export const SearchTermProvider = (props) =>{
    const [searchterm, setsearchterm] = useState("")
    return (
        <SearchTerm.Provider value={[searchterm, setsearchterm]}>
            {props.children}
        </SearchTerm.Provider>
    )
}