import {TodoActionsType, TodosAction, todoState} from "../../types/todo";

const initialPage: todoState = {
    todos: [],
    loading: false,
    page: 1,
    limit: 10,
    error: null,
};

export const todoReducer = (state = initialPage, action: TodosAction): todoState => {
    switch (action.type) {
        case TodoActionsType.FETCH_TODOS:
            return {...state, loading: true};
        case TodoActionsType.FETCH_TODOS_SUCCESS:
            return {...state, loading: false, todos: action.payload};
        case TodoActionsType.FETCH_TODOS_ERROR:
            return {...state, loading: false, error: action.payload};
        case TodoActionsType.SET_TODO_PAGE:
            return {...state, page: action.payload};
        default:
            return state;
    }
}