import { createContext, useState } from "react";

export const RegionContext = createContext()

export const RegionContextProvider = (props) =>{
    const [region, setregion] = useState(false)
    return (
        <RegionContext.Provider value={[region, setregion]}>
            {props.children}
        </RegionContext.Provider>
    )
}