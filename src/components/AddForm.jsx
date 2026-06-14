import { Link } from "react-router-dom"
import {useState} from "react"
import { useToast } from "../context/toastContext"
import { useReducer ,useEffect} from "react"
import taskWindowReducer from "../reducers/taskWindowReducer"
import '../styling/addFormStyling.css'

export default function AddForm(){
    const [Taskdata,setTaskData]=useState({title:"",content:""})
    let intialState=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[]
    let [TaskWindowState,dispatch]=useReducer( taskWindowReducer,intialState);
    useEffect(()=>{
        localStorage.setItem("tasks", JSON.stringify(TaskWindowState));
    },[TaskWindowState])
    const {showHideTask}= useToast();    
    return(
        <>  
            <div className="popUp">
                <div className="form1">
                    <h1 >Adding task</h1>
                    <input name="title" type="text" onChange={(e)=>{setTaskData({...Taskdata,title:e.target.value});}} value={Taskdata.title} placeholder="Task Title ..."/>
                    <input name="content" type="text" onChange={(e)=>{setTaskData({...Taskdata,content:e.target.value});}} value={Taskdata.content} placeholder="Task Describtion ..."/>
                    <div>
                    <Link to={-1}>
                        <button onClick={()=>{
                            if(Taskdata.title==""){
                                alert("SORRY ,You Must Fill The Title of the task !");
                            }
                            else if(Taskdata.content==""){
                                alert("SORRY ,You Must Fill The Body of The Task !");
                            }
                            else{
                                dispatch({type: "add",payload:{title:Taskdata.title,content:Taskdata.content}});
                                showHideTask("TASK ADDED !")
                            }
                                
                        }}>add</button>
                    </Link>
                    <Link to={-1}>
                        <button>back</button>
                    </Link>
                    </div>
                </div>
            </div>
        </>
    )
}