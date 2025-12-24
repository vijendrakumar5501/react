import { createContext, useContext, useState } from "react";


const MyContext=createContext();

const useMyContext=()=>{
    return useContext( MyContext);
}

const MyContextProvider=({children})=>{

    const [count, setCount]=useState(0);

    const value={
        count,setCount
    }
    
    return(
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    )
}


export {useMyContext,MyContextProvider};