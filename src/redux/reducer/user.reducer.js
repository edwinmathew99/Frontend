import { GET_INVENTORY, EDIT_INVENTORY } from "../action/user.action";


export const adminReducer = (state = { table: [], dataToUpdate: {} }, action) => {
    let { type, payload } = action;
    switch (type) {
        case GET_INVENTORY:
            return { ...state, table: payload };
        case EDIT_INVENTORY:
            return { ...state, dataToUpdate: payload }
            
        default:
            return state;
    }

}