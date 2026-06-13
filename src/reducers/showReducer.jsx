export default function showReducer(state,action){
    switch (action.type){
        case "show":{
            return {title:action.payload.title};
        }
        case "edite":{
            return {title:action.payload.content};
        }
        default:
            return state;
    }
}