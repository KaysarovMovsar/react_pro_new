export const loadTodos = () => {
    return (dispatch)=> {
        dispatch({type: "load/todos/start"})
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response)=> response.json())
            .then((json)=> dispatch({
                type: "load/todos/fulfilled",
                payload: json
            }))
    }
}

export const removeTodo = (id) => {
    return (dispatch) => {
        dispatch({type: `remove/todo/start`})
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,
            {method: "DELETE"})
            .then((response)=> response.json())
            .then((json)=> dispatch({
                type: "remove/todo/fulfilled",
                payload: id
            }))
    }
}