import * as actionTypes from './constants';

export const incrementCounter = () => {
    return {
        type: actionTypes.INCREMENT_COUNTER
    }
}

export const resetCounter = () => {
    return {
        type: actionTypes.RESET_COUNTER,
        counterValue: 0
    }
}

export const closeModal = () => {
    return {
        type: actionTypes.CLOSE_MODAL
    }
}

export const mouseScrolled = (sizeVal) => {
    return {
        type: actionTypes.MOUSE_SCROLLED,
        value: sizeVal
    }
}

export const updateDisplayList = (listValue) => {
    return {
        type: actionTypes.UPDATE_DISPLAY_LIST,
        displayList: listValue
    }
}

export const sortDisplayList = (order, listValue) => {
    return {
        type: actionTypes.SORT_DISPLAY_LIST,
        sortOrder: order,
        displayList: listValue,

    }
}


