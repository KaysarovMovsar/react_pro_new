const initialState = {
    todos: [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        }
    ],
    loading: false,

    users: [],
    usersLoading: false
}

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case "load/todos/start":
            return {
                ...state,
                loading: true
            }
        case "load/todos/fulfilled":
            return {
                ...state,
                todos: action.payload,
                loading: false
            }
        case "remove/todo/start":
            return {
                ...state,
                todos: state.todos.map((item) => {
                        if(item.id === action.payload) {
                            return {
                                ...item,
                                deleting: true
                            }
                        }
                        return item
                    }

                )
            }

        case "remove/todo/fulfilled":
            return {
                ...state,
                todos: state.todos.filter((item) => item.id !== action.payload)
            }

        case "load/todo/access":
            return {
                ...state,
                todos: state.todos.map((item) => {
                        if(item.id === action.payload) {
                            return {
                                ...item,
                                checking: true
                            }
                        }
                        return item
                    }

                )
            }

        case "check/todo/access":
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if(todo.id === action.payload){
                        return {
                            ...todo,
                            completed: !todo.completed,
                            checking: false
                        }
                    }
                    return todo
                })
            }
        case "load/users/start":
            return {
                ...state,
                usersLoading: true
            }
        case "load/users/fulfilled":
            return {
                ...state,
                users: action.payload,
                usersLoading: false
            }
        default:
            return state
    }
}