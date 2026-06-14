import { Link } from "react-router-dom"
import { useContext,useReducer  } from "react"
import { taskEditeContext } from "../context/taskEditeContext"
import taskWindowReducer from "../reducers/taskWindowReducer"
import { useToast } from "../context/toastContext"
import '../styling/editTask.css'

export default function EditTask(){
    const {todo,setTodo}=useContext(taskEditeContext)
    const [todos,dispatch]=useReducer(taskWindowReducer,{})
    const {showHideTask}=useToast();
    return(
        <>  
            <div className="popUp" >
                <div className="form" >
                    <h1 >Edite task</h1>
                    <input className="title" value={todo.title}  type="text" placeholder="Task Title ..." onChange={(e)=>{
                        setTodo({...todo,title:e.target.value})
                    }} value={todo.title}/>
                    <textarea  onChange={(e)=>{
                        setTodo({...todo,content:e.target.value})
                    }} value={todo.content} >{todo.content}</textarea>
                    <div>
                        <Link to={-1}>
                    <button onClick={()=>{
                        const d=new Date();
                        let date=`${d.getHours()}:${d.getMinutes()}-${d.getDate()}/${d.getMonth()+1}`;
                        dispatch({type:"edite" , payload:{...todo ,editDate:date}});
                        showHideTask("TASK HAD BEEN EDITED !");
                    }}>save</button>
                        </Link>
                    <Link to={-1}>
                        <button >back</button>
                    </Link>
                    </div>
                </div>
            </div>
        </>
    )
}