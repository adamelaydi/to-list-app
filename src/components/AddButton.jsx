import { Link } from "react-router-dom"
const styling={
                position:"absolute",
                bottom:"15px",
                right:"15px",
                width:"45px",
                height:"45px",
                fontSize:"30px",
                border:"none",
                borderRadius:"50%",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                color:"white",
                backgroundColor:"#0072bd"
            }
export default function AddButton(){
    
    return(
        <>
        <Link to='/add'>
            <button style={styling}>+</button>
        </Link>
        </>
    )
}