import { Link } from "react-router-dom"
import { useContext,useReducer  } from "react"
import { taskEditeContext } from "../context/taskEditeContext"
import taskWindowReducer from "../reducers/taskWindowReducer"
import { useToast } from "../context/toastContext"
//#region styling
const formStyle={
    backgroundColor:"rgba(37, 184, 184, 0.8)",
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
    width:"90%",
    paddingLeft:"15px",
    border:"none",
    borderRadius:"15px",
    textTransform:"capitalize",
    fontSize:"25px",
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
const headingStyle={
                        fontSize:"35px",
                        fontWeight:"800",
                        color:"white",
                    }
const textareaStyle={
                        width:"90%",
                        height:"190px",
                        border:"none",
                        borderRadius:"15px",
                        padding:"15px"
                    }
const buttonDivStyling={
                        width:"80%",
                        display:"flex",
                        justifyContent:"space-around"
                    }
//#endregion

export default function EditTask(){
    const {todo,setTodo}=useContext(taskEditeContext)
    const [todos,dispatch]=useReducer(taskWindowReducer,{})
    const {showHideTask}=useToast();
    return(
        <>  
            <div className="popUp" style={popUpStyling}>
                <div style={formStyle}>
                    <h1 style={headingStyle}>Edite task</h1>
                    <input value={todo.title} style={InputStyling} type="text" placeholder="Task Title ..." onChange={(e)=>{
                        setTodo({...todo,title:e.target.value})
                    }} value={todo.title}/>
                    <textarea style={textareaStyle} onChange={(e)=>{
                        setTodo({...todo,content:e.target.value})
                    }} value={todo.content} >{todo.content}</textarea>
                    <div style={buttonDivStyling}>
                        <Link to={-1}>
                    <button style={ButtonStyling} onClick={()=>{
                        const d=new Date();
                        let date=`${d.getHours()}:${d.getMinutes()}-${d.getDate()}/${d.getMonth()+1}`;
                        dispatch({type:"edite" , payload:{...todo ,editDate:date}});
                        showHideTask("TASK HAD BEEN EDITED !");
                    }}>save</button>
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