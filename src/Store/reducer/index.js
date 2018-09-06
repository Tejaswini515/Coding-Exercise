import * as actionTypes from '../actions/constants';
import { CARS } from '../../Constants/ListData';

const initialState = {
    counter: 0,
    show: false,
    size:20,
    scrollValue: 0,
    displayList: CARS,
    sort: 'ASC'
}

const reducer = (state=initialState, action) => {
    console.log(action.type);
    switch(action.type){
        case actionTypes.INCREMENT_COUNTER: return Object.assign({},state, {counter: state.counter + 1, show: true}); 
        case actionTypes.RESET_COUNTER: return Object.assign({},state,{counter: action.counterValue, show: true});
        case actionTypes.CLOSE_MODAL: return Object.assign({},state,{show: false});
        case actionTypes.MOUSE_SCROLLED: return Object.assign({},state,{size: state.size + action.value})
        case actionTypes.UPDATE_DISPLAY_LIST: return Object.assign({},state,{displayList: action.displayList});
        case actionTypes.SORT_DISPLAY_LIST: return Object.assign({},state,{displayList: action.displayList,sort: action.sortOrder});
        default: return state
    }
}

export default reducer;