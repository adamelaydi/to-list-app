const actions ={
type:{ show:"show",edite:"edite",delete:"delete",complete:"complete" ,add:"add"}
}
export default function taskWindowReducer(state , action){
    switch(action.type){
    case actions.type.add:{
        const d=new Date();
        let date=`${d.getHours()}:${d.getMinutes()}-${d.getDate()}/${d.getMonth()+1}`;
        const newTask={
        id:crypto.randomUUID(),
        title:action.payload.title,
        content:action.payload.content,
        addDate:date,
        editDate:"",
        completed:false,
    }
        let updatedTasks;
        const savedTasks=JSON.parse(localStorage.getItem("tasks"));
        updatedTasks=[...savedTasks,newTask];
        return updatedTasks ;
    }
    case actions.type.complete:{
        let newTasks = state.map((d) => {
        
            if (d.id ===action.payload.itemId) {
            console.log("adam")
            return {
                ...d,
                completed: true
            };
        }
        else
            return d ;
    });
    return newTasks;
    }
    case actions.type.delete:{
        const newData=state.filter(d=> d.id!=action.payload.itemId);
        return [...newData]
    }
    case actions.type.edite:{
        let savedTasks=JSON.parse(localStorage.getItem("tasks"));
        const updatedTasks= savedTasks.map((d)=>{
            if(d.id===action.payload.id){
                return action.payload;
            }else{
                return d;
            }
        })
        localStorage.setItem("tasks",JSON.stringify(updatedTasks));
        return updatedTasks;
    }
    default:
        throw Error("unknown action !" + action.type);
}
}