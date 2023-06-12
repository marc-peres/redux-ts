import React, {JSX} from 'react';
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";

const App = (): JSX.Element => {
    return (
        <div>
            <UserList />
            <hr/>
            <TodoList />
        </div>
    );
};

export default App;
