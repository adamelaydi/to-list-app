//#region Imports
import { useReducer ,useEffect,useContext } from "react"  
import { Link } from "react-router-dom"
import taskWindowReducer from "../reducers/taskWindowReducer"
import { taskEditeContext } from "../context/taskEditeContext"
import { useToast } from "../context/toastContext"
import '../styling/taskCard.css'
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
        borderRadius:"15px",
        position:"relative",
        overflow:"hidden",
        border:"2px solid green",
    }:{
        padding:"15px",
        borderRadius:"15px",
        position:"relative",
        overflow:"hidden",
    };
    


    return(
        <>
        
            <div style={CardStyling} className="card">
                <h3 >{prop.title}</h3>
                <p className="id">{prop.id}</p>
                <p className="content">
                    {prop.content}
                </p>
                <div className="info"> 
                    <div className="btns">
                        <Link to={"/show"}>
                        <button className="show" onClick={()=>{
                            setTodo({...prop});
                        }} >Show</button>
                        </Link>
                        <Link to={"/edite"}>
                        <button className="edite" onClick={()=>{
                            setTodo({...prop});
                            showHideTask("TASK IS READY TO EDITE !");
                    }}>edite</button>
                    </Link>
                    <button className="delete" onClick={()=>{
                        showHideTask("TASK IS DELETED SUCCESSFULLY !");
                        taskDispatch({type:"delete",payload:{itemId:prop.id}});
                        }}>delete</button> 
                        <button className="complete" onClick={()=>{
                            showHideTask("TASK IS COMPLETED SUCCESSFULLY !");
                            taskDispatch({type:"complete",payload:{itemId:prop.id}});
                            }}>complete</button>
                    </div>
                    <div className="date" >
                        <p ><span>add : </span>{prop.addDate}</p>
                        <p ><span> Edited : </span>{prop.editDate}</p>
                    </div>
                </div>
            </div>
        </>
    )
}