import React from 'react';
import {useSelector} from "react-redux";
import {Todo} from "./Todo";

export const Todos = ({handleClick, handleChecking}) => {
    const todos = useSelector(state => state.todos)
    const users = useSelector(state => state.users)
    return (
        <>
            {
                todos.map(item => {
                    return(
                        <>
                            <Todo
                                id={item.id}
                                key={item.id}
                                handleClick={handleClick}
                                handleChecking={handleChecking}
                                completed={item.completed}
                                userId={item.userId}
                                users={users}
                                title={item.title}
                                deleting={item.deleting}
                                checking={item.checking}
                            />
                        </>
                    )
                })
            }
        </>
    );
}

