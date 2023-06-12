import {userAction, UserActionsType} from "../../types/users";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<userAction>) => {
        try {
            dispatch({type: UserActionsType.FETCH_USERS});
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setTimeout(() => {
                dispatch({type: UserActionsType.FETCH_USERS_SUCCESS, payload: response.data})
            }, 500);
        } catch (e) {
            dispatch({type: UserActionsType.FETCH_USERS_ERROR, payload: 'Произошла ошибка при загрузке пользователей'});
        }
    }
}