import React from 'react';

export const Button = ({handleClick, id, deleting}) => {
    return (
        <>
            <button
                onClick={() => handleClick(id)}
                disabled={deleting}>
                Удалить
            </button>
        </>
    );
};

