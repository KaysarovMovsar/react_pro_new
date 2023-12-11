import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import {loadTodos, removeTodo} from "./action";

const App = () => {

  const todos = useSelector(state => state.todos)
  const loading = useSelector(state => state.loading)

  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(loadTodos())
  }, [])

  const handleClick = (id) => {
    dispatch(removeTodo(id))
  }


  return(
    <>
      {
        loading ? "Wait please! The download is in progress" : (
            todos.map(item => {
              return(
                  <>
                    <div className="container">
                      <div className="checkbox">
                        <input type="checkbox"/>
                      </div>
                      <div>{item.title}</div>
                      <div className="button">
                        <button onClick={() => handleClick(item.id)}>
                          Удалить
                        </button>
                      </div>

                    </div>
                  </>
              )
            })
        )
      }
    </>
  );
}

export default App;
