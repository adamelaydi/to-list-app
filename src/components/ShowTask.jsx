
import { Link } from "react-router-dom"
import { useContext } from "react"
import { taskEditeContext } from "../context/taskEditeContext"
//#region stlying
const formStyle={
    backgroundColor:"rgba(9, 186, 195, 0.8)",
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center",
    flexDirection:"column",
    flexWrap:"wrap",
    width:"80%",
    maxWidth:"400px",
    height:"400px",
    borderRadius:"25px",
    padding:"0 25px 50px ",
    position:"absolute",
    top:"50%",
    transform:"translateY(-50%) translateX(-50%)",
    left:"50%",
    

}
const popUpStyling={
                width:"100%",
                height:"100vh",
                background:"#777",
                zIndex:"100000",
                position:"relative",
                top:"0px",
                left:"0px",
                zindex:"9999"
            }
const ButtonStyling={
                        width:"70px",
                        height:"32px",
                        border:"none",
                        borderRadius:"5px",
                        fontSize:"15px",
                        fontWeight:"700",
                        textTransform:"capitalize",
                        color:"#777"
                    }
const fHeadingStyling={
                        fontSize:"35px",
                        fontWeight:"800",
                        color:"white",
                    }
const sHeadingStyling={
                        width:"90%",
                        padding:"0 15px",
                        textTransform:"capitalize",
                        backgroundColor:"#ececec",
                        borderRadius:"15px"
                    }
const textAreaStyling={
                        width:"90%",
                        height:"190px",
                        border:"none",
                        borderRadius:"15px",
                        padding:"15px",
                        backgroundColor:"white"
                    }
//#endregion                    

export default function ShowTask(){
    const{todo ,setTodo}=useContext(taskEditeContext);
    return(
        <>  
            <div className="popUp" style={popUpStyling}>
                <div style={formStyle}>
                    <h1 style={fHeadingStyling}>Showing Task</h1>
                    <h3 style={sHeadingStyling}>{todo.title}</h3>
                    <div style={textAreaStyling}  >{todo.content}</div>
                    <Link to={-1}>
                        <button style={ButtonStyling} onClick={()=>{
                        }}>back</button>
                    </Link>
                </div>
            </div>
        </>
    )
}