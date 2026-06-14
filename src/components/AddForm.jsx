import { Link } from "react-router-dom"
import {useState} from "react"
import { useToast } from "../context/toastContext"
import { useReducer ,useEffect} from "react"
import taskWindowReducer from "../reducers/taskWindowReducer"
import '../styling/addFormStyling.css'
//#region styling
const formStyle={
    backgroundColor:"rgba(10, 178, 234, 0.58)",
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
const InputStyling={
    width:"80%",
    height:"35px",
    paddingLeft:"7px",
    border:"none",
    borderRadius:"5px"
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
const headingStyle={
                        fontSize:"35px",
                        fontWeight:"800",
                        color:"white",
                    }
const buttonStyling={
                        width:"80%",
                        display:"flex",
                        justifyContent:"space-around"
                    }
//#endregion
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
                <div style={formStyle}>
                    <h1 style={headingStyle}>Adding task</h1>
                    <input style={InputStyling} type="text" onChange={(e)=>{setTaskData({...Taskdata,title:e.target.value});}} value={Taskdata.title} placeholder="Task Title ..."/>
                    <input style={InputStyling} type="text" onChange={(e)=>{setTaskData({...Taskdata,content:e.target.value});}} value={Taskdata.content} placeholder="Task Describtion ..."/>
                    <div style={buttonStyling}>
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
                                
                        }} style={ButtonStyling}>add</button>
                    </Link>
                    <Link to={-1}>
                        <button style={ButtonStyling}>back</button>
                    </Link>
                    </div>
                </div>
            </div>
        </>
    )
}