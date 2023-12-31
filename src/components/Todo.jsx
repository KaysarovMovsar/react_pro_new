import React from 'react';
import ReactLoading from "react-loading";
import {Checkbox} from "./Checkbox";
import {Button} from "./Button";

export const Todo = ({handleClick, handleChecking, completed, id, title, deleting, checking, users, userId}) => {
    const user = users.find((u)=> u.id === userId)
    return (
        <>
            <div className="container" key={id}>
                <div className="checkbox">
                    {checking ? <ReactLoading type="spin" color="blue" height={16} width={16}/> : (
                        <Checkbox
                            handleChecking={handleChecking}
                            id={id}
                            completed={completed}
                        />
                    )}
                </div>
                <div>{title}<br/>
                    <div>{user?.email}</div>

                </div>
                <div className="button">
                    <Button
                        handleClick={handleClick}
                        id={id}
                        deleting={deleting}
                    />
                </div>
            </div>
        </>
    );
};

