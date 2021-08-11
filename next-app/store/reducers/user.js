import { getUserType } from "../actions/user";
import { setUserType } from "../actions/user";
import { setLocalItem } from "../../General/Utils/LocalStorage";
import reducer from "./auth";

const initialState = {
    isWorker: getLocalItem('isWorker'),
}

function toggleUserType(state, action) {
    setLocalItem('isWorker', !state.isWorker)
    return updateObject(state, {
        isWorker: !state.isWorker
    });
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.TOGGLE_USERTYPE: return toggleUserType(state, action);
        default: return state;
    }
}

export default reducer;