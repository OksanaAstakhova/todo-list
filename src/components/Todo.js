import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Todo({ text, todo, todos, setTodos }) {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos(
            todos.map((el) => {
                if (el.id === todo.id) {
                    return {
                        ...el,
                        completed: !el.completed,
                    };
                }
                return el;
            })
        );
    };
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                {text}
            </li>
            <button onClick={completeHandler} className="complete-btn">
                <FontAwesomeIcon icon={faCheck}/>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <FontAwesomeIcon icon={faTrash}/>
            </button>
        </div>
    );
}

export default Todo;
