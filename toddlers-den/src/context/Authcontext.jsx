import axios from "axios";
import { createContext, useEffect, useState } from "react";



export const AuthContext = createContext();


const getData = () => {
  return axios.get(`http://localhost:3001/products`)
};
 const AuthContextProvider =({children})=>{
    

    const[data,setData]  = useState({});
    useEffect(()=>{
        getData().then((res) => {
          console.log(res.data);
          setData(res);
        })
        .catch((err)=>{console.log(err)});
    },[])

    return(
        <AuthContext.Provider value={{data}}>
            {children}
        </AuthContext.Provider>
    )

 }

export default AuthContextProvider;