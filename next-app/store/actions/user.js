import * as actionTypes from './actionTypes'
import { setLocalItem } from '../../General/Utils/LocalStorage'

export function toggleUserType() {
    return dispatch => {
        dispatch(function () {
            return {
                type: actionTypes.TOGGLE_USERTYPE
            }
        })
    }
}