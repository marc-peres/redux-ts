import {userAction, UserActionsType, UsersStore} from "../../types/users";


const initialState: UsersStore  = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action: userAction): UsersStore => {
    switch (action.type) {
        case UserActionsType.FETCH_USERS:
            return {error: null, loading: true, users: []};
        case UserActionsType.FETCH_USERS_SUCCESS:
            return {error: null, loading: false, users: action.payload}
        case UserActionsType.FETCH_USERS_ERROR:
            return {error: action.payload, loading: false, users: []}
        default:
            return state;
    }
}