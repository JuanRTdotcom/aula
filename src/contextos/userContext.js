import React, { useState } from "react"

export default function SessionProperty({children}){

    const [state,setstate] = useState({})
    return(
        <>
            <Context value={[state,setstate]}>
                {children}
            </Context>
        </>
    )
    
}

export const Context = React.createContext({
    stateUserLogin:2 /* 1 2 3 */
})