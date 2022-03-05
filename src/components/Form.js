import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Form = ({ setInputText, todos, setTodos, inputText }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        if (!inputText) {
            return;
        }

        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random() * 1000 },
        ]);
        setInputText("");
    };

    return (
        <div className="form-wrapper">
            <form className="todo-form" onSubmit={submitTodoHandler}>
                <input
                    value={inputText}
                    onChange={inputTextHandler}
                    type="text"
                    className="todo-input"
                />
                <button className="todo-button" type="submit">
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </form>
        </div>
    );
};

export default Form;
