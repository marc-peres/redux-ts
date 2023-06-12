export interface todoState {
    todos: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum TodoActionsType {
    FETCH_TODOS = "FETCH_TODOS",
    FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
    FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
    SET_TODO_PAGE = "SET_TODO_PAGE"
}

interface FetchTodosAction {
    type: TodoActionsType.FETCH_TODOS
}
interface FetchTodosSuccessAction {
    type: TodoActionsType.FETCH_TODOS_SUCCESS;
    payload: any[];
}
interface FetchTodosErrorAction {
    type: TodoActionsType.FETCH_TODOS_ERROR;
    payload: string;
}
interface SetTodoPage {
    type: TodoActionsType.SET_TODO_PAGE;
    payload: number;
}

export type TodosAction = FetchTodosAction | FetchTodosSuccessAction | FetchTodosErrorAction | SetTodoPage;