import React from 'react';

export const Checkbox = ({handleChecking, id, completed}) => {
    return (
        <>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => handleChecking(id, completed)}
            />
        </>
    );
};
