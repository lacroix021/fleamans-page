import React from "react";
export const generalContext = React.createContext({});

export default function GeneralContextProvider({ children }){
    const max_width = "1200px";

    return (
        <generalContext.Provider value = { max_width }>
            { children }
        </generalContext.Provider>
    )
}