import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { loadTodos } from "./action";

const App = () => {

  const todos = useSelector(state => state.todos)
  const loading = useSelector(state => state.loading)

  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(loadTodos())
  }, [])
  return(
    <>
      {
        loading ? "Wait please! The download is in progress" : (
            todos.map(item => {
              return(
                  <>
                    {item.title}
                  </>
              )
            })
        )
      }
    </>
  );
}

export default App;
