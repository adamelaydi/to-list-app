export default function filterReducer(state,action){
    let originalData =JSON.parse(localStorage.getItem("tasks")) || [];
    switch (action.type){
        case "all":{
            return [...originalData];
        }
        case "completed":{
            return originalData.filter(
                    item => item.completed
                );
        }
        case "notCompleted":{
            return originalData.filter(
                    item => !item.completed
                );
        }
        default:
            return state;
    }
}