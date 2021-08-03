import { createStore } from "redux";

const reducer = (state = 0 ,action) => {
    
    switch(action.type){
        case '@user/logueado':
            state = 1
            return state;
        case '@user/des_logueado':
            state = 0
            return state;
        default:
            return state;
    }
}

export default createStore(reducer)