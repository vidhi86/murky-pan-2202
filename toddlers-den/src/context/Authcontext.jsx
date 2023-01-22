
import { createContext, useEffect, useState } from "react";



export const AuthContext = createContext();



 const AuthContextProvider =({children})=>{
    

    
    return(
        <AuthContext.Provider >
            {children}
        </AuthContext.Provider>
    )

 }

export default AuthContextProvider;