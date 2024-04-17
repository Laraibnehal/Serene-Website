import axios from "axios";
import {  createContext, useContext, useEffect}  from "react";

const AppContext = createContext();
const AppProvider = ({childern}) => {
const getProducts =async (url) =>{
    const res = await axios.get(url);
}
useEffect(()=>{
    // getProducts(API);
},[])

return (
<AppContext.Provider value={{myName: "Lara"}}>
{childern}
</AppContext.Provider> 
)
}     
//custom hooks
const useProductContext = () =>{
    return  useContext(AppContext);
}
export {AppProvider, AppContext, useProductContext};               