import { NavLink } from "react-router-dom"
import TaskCard from "./TaskCard"
import "../styling/taskWindow.css"
import NoTaskYet from "./NoTaskYet"
import { useReducer  } from "react"
import filterReducer from "../reducers/filterReducer"
import taskWindowReducer from "../reducers/taskWindowReducer"
import { useToast } from "../context/toastContext"
import '../styling/taskListStyle.css'
//#region styling
const listStyle={
       
    }
    const TasksStyle={
    borderRadius:"15px",
    height:"70vh",
    width:"95%",
    backgroundColor:"#d8eafc6b",
    overflow:"scroll"
}
const headingStyle={
                backgroundColor:"#F4F6F8",
                width:"100%",
                textAlign:"center",
                color:"#050505bf"
            }
//#endregion

const actions ={
    type:{all:"all", completed:"completed" , notCompleted:"notCompleted",show:"show",edite:"edite",delete:"delete",complete:"complete"}
}
export default function TasksWindow(){

//show tasks
let intialState=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
let [TaskWindowState,dispatch]=useReducer( taskWindowReducer,intialState);

// filter Tasks
const [filterTasks,filterDispatch]=useReducer(filterReducer,TaskWindowState);
const {showHideTask}= useToast();    

return(
        <section className="taskWindow" style={listStyle}>
            <h1 style={headingStyle}>My Tasks</h1>
            <div className="filter">
                <NavLink to="/" className={({isActive})=>{return (isActive)?"active":"not";}} >
                    <button onClick={()=>{
                        filterDispatch({type:actions.type.all});
                        showHideTask("ALL TASKS !");
                        }} >all</button>
                </NavLink>
                <NavLink to="/completed" className={({isActive})=>{return (isActive)?"active":"not";}}>
                    <button onClick={()=>{
                        filterDispatch({type:actions.type.completed});
                        showHideTask("COMPLETED TASKS !");
                    }}>completed</button>
                </NavLink>
                <NavLink to="/not_completed" className={({isActive})=>{return (isActive)?"active":"not";}}>
                    <button  onClick={()=>{
                        filterDispatch({type:actions.type.notCompleted});
                        showHideTask("NOT COMPLETED TASKS !");
                        }} >not completed</button>
                </NavLink>
                
            </div>
            <div style={TasksStyle} className="taskList">
                        {
                        ( filterTasks.length === 0 )? <NoTaskYet /> :filterTasks.map((d) => (
                            <TaskCard
                                key={d.id}
                                prop={d}
                            />
                        ))  
                        }
            </div>
        </section>
    )
}