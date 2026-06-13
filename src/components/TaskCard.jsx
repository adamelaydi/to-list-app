//#region Imports
import { useReducer ,useEffect,useContext } from "react"  
import { Link } from "react-router-dom"
import taskWindowReducer from "../reducers/taskWindowReducer"
import { taskEditeContext } from "../context/taskEditeContext"
import { useToast } from "../context/toastContext"
//#endregion
//#region styling
    
    const pStyling={
        height:"40px",
        overflow:"clip",
        padding:"5px",
        borderRadius:"10px",
        backgroundColor:"#7c939c38"
    }
    const datePstyling={
                fontSize:"11px",
                fontWeight:"700",
                color:"#8f8e8e9e",
                fontStyle:"italic"
            }
    const BtnStyling={
                    fontSize:"11px",
                    fontWeight:"700",
                    color:"#8f8e8e9e",
                    padding:"1px 7px",
                    margin:"0 7px 0 0",
                    border:"none",
                    borderRadius:"5px"
                }
    const orderPStyling={
                    position:"absolute",
                    top:"-20px",
                    right:"-20px",
                    backgroundColor:"orange",
                    width:"60px",
                    height:"60px",
                    display:"flex",
                    justifyContent:"flex-start",
                    alignItems:"flex-end",
                    borderRadius:"50%",
                    padding:"7px 15px"
                }
    const headingStyle={
                    textTransform:"capitalize",
                    fontSize:"25px",
                    marginTop:"-10px",
                    fontWeight:"800"
                }
    const infoStyling={
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"space-between"
                }
    //#endregion

export default function TaskCard({prop}){
    let intialState=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
    const [TaskState,taskDispatch]=useReducer(taskWindowReducer,intialState)
    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(TaskState));
    },[TaskState])

    const{todo,setTodo}=useContext(taskEditeContext);
    const {showHideTask}= useToast(); 
    //styling
    const CardStyling=prop.completed?{
        backgroundColor:"#22C55E",
        padding:"15px",
        margin:"15px 30px",
        borderRadius:"15px",
        height:"150px",
        position:"relative",
        overflow:"hidden",
        border:"2px solid green",
    }:{
        backgroundColor:"#FFFFFF",
        padding:"15px",
        margin:"15px 30px",
        borderRadius:"15px",
        height:"150px",
        position:"relative",
        overflow:"hidden",
    };
    


    return(
        <>
        
            <div style={CardStyling} className="card">
                <h3 style={headingStyle}>{prop.title}</h3>
                <p style={orderPStyling}>{prop.id}</p>
                <p className="content" style={pStyling}>
                    {prop.content}
                </p>
                <div className="info" style={infoStyling}> 
                    <div className="btns">
                        <Link to={"/show"}>
                        <button onClick={()=>{
                            setTodo({...prop});
                        }} style={BtnStyling}>Show</button>
                        </Link>
                        <Link to={"/edite"}>
                        <button style={BtnStyling} onClick={()=>{
                            setTodo({...prop});
                            showHideTask("TASK IS READY TO EDITE !");
                    }}>edite</button>
                    </Link>
                    <button style={BtnStyling} onClick={()=>{
                        showHideTask("TASK IS DELETED SUCCESSFULLY !");
                        taskDispatch({type:"delete",payload:{itemId:prop.id}});
                        }}>delete</button> 
                        <button style={BtnStyling} onClick={()=>{
                            showHideTask("TASK IS COMPLETED SUCCESSFULLY !");
                            taskDispatch({type:"complete",payload:{itemId:prop.id}});
                            }}>complete</button>
                    </div>
                    <div className="date" style={{display:"flex"}}>
                        <p style={datePstyling}><span>add : </span>{prop.addDate}</p>
                        <p style={datePstyling}><span> || Edited : </span>{prop.editDate}</p>
                    </div>
                </div>
            </div>
        </>
    )
}