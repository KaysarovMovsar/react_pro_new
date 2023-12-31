import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { checkedTodo, loadTodos, loadUsers, removeTodo } from "./redux/action";
import ReactLoading from "react-loading"
import { Todos } from "./components/Todos";

const App = () => {

  const loading = useSelector(state => state.loading)
  const userLoading = useSelector(state => state.usersLoading)
  const checkLoading = loading || userLoading

  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(loadTodos())
    dispatch(loadUsers())
  }, [])

  const handleClick = (id) => {
    dispatch(removeTodo(id))
  }

  const handleChecking = (id, completed) => {
    dispatch(checkedTodo(id, completed))
  }

  return(
    <>
      {
        checkLoading ? <ReactLoading type="spin" color="blue" height={200} width={200} className="loading_circle"/> : (
            <Todos
                handleClick={handleClick}
                handleChecking={handleChecking}
            />
        )
      }
    </>
  );
}

export default App;
