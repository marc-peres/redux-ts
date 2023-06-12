import {Dispatch} from "redux";
import axios from "axios";
import {TodoActionsType, TodosAction} from "../../types/todo";

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodosAction>) => {
        try {
            dispatch({type: TodoActionsType.FETCH_TODOS});
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            })
            setTimeout(() => {
                dispatch({type: TodoActionsType.FETCH_TODOS_SUCCESS, payload: response.data})
            }, 500);
        } catch (e) {
            dispatch({type: TodoActionsType.FETCH_TODOS_ERROR, payload: 'Произошла ошибка при загрузке дел'});
        }
    }
}

export const setTodoPage = (page: number): TodosAction => {
    return {type: TodoActionsType.SET_TODO_PAGE, payload: page};
}