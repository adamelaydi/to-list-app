import { createContext ,useState,useContext } from "react";
import MySnackBar from '../components/MySnackBar'
export const toastContext=createContext(false);
export const useToast = ()=>{
    return useContext(toastContext);
}
export function ToastProvider({children}){
    const [snackBar ,setSnackBar]=useState({open:false,message:""});
    
    const showHideTask=(m)=>{
            setSnackBar({open:true,message:m});
            setTimeout(() => {
            setSnackBar({open:false,message:""});
            }, 3000);
    
        }

    return(
    <toastContext.Provider value={{showHideTask}}>
        {children}
        <MySnackBar  open={snackBar}/>
    </toastContext.Provider>
    )
}