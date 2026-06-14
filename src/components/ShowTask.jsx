import '../styling/showTask.css'
import { Link } from "react-router-dom"
import { useContext } from "react"
import { taskEditeContext } from "../context/taskEditeContext"

export default function ShowTask(){
    const{todo ,setTodo}=useContext(taskEditeContext);
    return(
        <>  
            <div className="popUp" >
                <div className='form' >
                    <h1 >Showing Task</h1>
                    <h3>{todo.title}</h3>
                    <div className='content'>{todo.content}</div>
                    <Link to={-1}>
                        <button  onClick={()=>{
                        }}>back</button>
                    </Link>
                </div>
            </div>
        </>
    )
}