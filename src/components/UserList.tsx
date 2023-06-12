import {FC, JSX, useEffect} from "react";
import {useTypedSelector} from "../hooks/useTypeSelector";
import {fetchUsers} from "../store/action-creators/user";
import {useAction} from "../hooks/useAction";

const UserList: FC = (): JSX.Element => {
    const {users, loading, error} = useTypedSelector(state => state.user);
    const { fetchUsers } = useAction();
    useEffect(() => {
        fetchUsers()
    }, []);

    if (loading) {
        return <h1>Идет загрузка</h1>
    }

    if (error) {
        return <h1>Произошла ошибка</h1>
    }

    return (
        <div>
            {users.map(user => {
                    return (
                        <div key={user.id}>{user.name}</div>
                    );
                })
            }
        </div>
    );
};

export default UserList;