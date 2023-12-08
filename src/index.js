import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";

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
    loading: false
}

const reducer = (state=initialState, action) => {
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
        default:
            return state
    }
}
const store = createStore(reducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


