import { createContext, useState } from "react";

export const FeedRefresh = createContext()

export const FeedRefreshProvider = (props) =>{
    const [feedrefresh, setfeedrefresh] = useState(1)
    return (
        <FeedRefresh.Provider value={[feedrefresh, setfeedrefresh]}>
            {props.children}
        </FeedRefresh.Provider>
    )
}