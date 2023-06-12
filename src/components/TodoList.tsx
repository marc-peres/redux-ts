import {FC, JSX, useEffect} from "react";
import {useTypedSelector} from "../hooks/useTypeSelector";
import {useAction} from "../hooks/useAction";

const TodoList: FC = (): JSX.Element => {
    const {todos, loading, error, page, limit} = useTypedSelector(state => state.todos);
    const { fetchTodos, setTodoPage } = useAction();
    const pages = [1,2,3,4,5]
    useEffect(() => {
        fetchTodos(page, limit)
    }, [page]);

    if (loading) {
        return <h1>Идет загрузка</h1>
    }

    if (error) {
        return <h1>Произошла ошибка</h1>
    }

    return (
        <div>
            {todos.map(todo => {
                    return (
                        <div key={todo.id}>{todo.id} - {todo.title}</div>
                    );
                })
            }
            <div style={{display: "flex"}}>
                {pages.map(p => {
                    return (
                        <div
                            onClick={() => setTodoPage(p)}
                            key={p}
                            style={{
                                border: p === page ? '2px solid green' : '1px solid gray',
                                padding: '10px',
                                cursor: 'pointer',
                                marginRight: '5px'
                        }}
                        >
                            {p}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TodoList;