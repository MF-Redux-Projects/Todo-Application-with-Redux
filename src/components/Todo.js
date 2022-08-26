import {useDispatch} from "react-redux";
import {useState} from "react";
import cancelImage from "../assets/images/cancel.png";
import deleteTodo from "../redux/todos/thunk/deleteTodo";
import updateColor from "../redux/todos/thunk/updateColor";
import updateStatus from "../redux/todos/thunk/updateStatus";
import updateText from "../redux/todos/thunk/updateText";

export default function Todo({todo}) {
    const dispatch = useDispatch();
    const [input, setInput] = useState(todo.text);
    const [edit, setEdit] = useState(false);

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const {text, id, completed, color} = todo;

    const handleStatusChange = (todoId) => {
        dispatch(updateStatus(todoId, completed));
    };

    const handleColorChange = (todoId, color) => {
        dispatch(updateColor(todoId, color));
    };

    const handleDelete = (todoId) => {
        dispatch(deleteTodo(todoId));
    };

    const toggleEdit = () => {
        setEdit(!edit);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateText(id, input));
        setEdit(false);
    }

    return (
        <div
            className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
            <div
                className={`relative rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
                    completed &&
                    "border-green-500 focus-within:border-green-500"
                }`}
            >
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => handleStatusChange(id)}
                    className="opacity-0 absolute rounded-full"
                />
                {completed && (
                    <svg
                        className="fill-current w-3 h-3 text-green-500 pointer-events-none"
                        viewBox="0 0 20 20"
                    >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
                    </svg>
                )}
            </div>

            <div
                className={`select-none flex-1`}
            >
                {!edit && text}
                {edit && (
                    <form
                        className="flex items-center rounded-md"
                        id={`todo-${id}`}
                        onSubmit={submitHandler}
                    >
                        <input
                            type="text"
                            value={input}
                            onChange={handleInput}
                            id={`todo-input-${id}`}
                            className="block bg-white w-full rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        />
                    </form>
                )}
            </div>
            {
                !completed && (
                    <>
                        <div
                            className={`flex-shrink-0 h-4 w-4 ml-auto cursor-pointer`}
                            onClick={toggleEdit}
                        >
                            {
                                edit
                                    ? (
                                        <svg fill="#7C3AED" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20px"
                                             height="20px">
                                            <path
                                                d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 22.28125 11.28125 L 15 18.5625 L 10.71875 14.28125 L 9.28125 15.71875 L 14.28125 20.71875 L 15 21.40625 L 15.71875 20.71875 L 23.71875 12.71875 Z"/>
                                        </svg>)
                                    : (<svg fill="#7C3AED" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20px"
                                            height="20px">
                                        <path
                                            d="M 22.828125 3 C 22.316375 3 21.804562 3.1954375 21.414062 3.5859375 L 19 6 L 24 11 L 26.414062 8.5859375 C 27.195062 7.8049375 27.195062 6.5388125 26.414062 5.7578125 L 24.242188 3.5859375 C 23.851688 3.1954375 23.339875 3 22.828125 3 z M 17 8 L 5.2597656 19.740234 C 5.2597656 19.740234 6.1775313 19.658 6.5195312 20 C 6.8615312 20.342 6.58 22.58 7 23 C 7.42 23.42 9.6438906 23.124359 9.9628906 23.443359 C 10.281891 23.762359 10.259766 24.740234 10.259766 24.740234 L 22 13 L 17 8 z M 4 23 L 3.0566406 25.671875 A 1 1 0 0 0 3 26 A 1 1 0 0 0 4 27 A 1 1 0 0 0 4.328125 26.943359 A 1 1 0 0 0 4.3378906 26.939453 L 4.3632812 26.931641 A 1 1 0 0 0 4.3691406 26.927734 L 7 26 L 5.5 24.5 L 4 23 z"/>
                                    </svg>)
                            }
                        </div>

                        <div
                            className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-green-500 border-green-500 ${
                                color === "green" && "bg-green-500"
                            }`}
                            onClick={() => handleColorChange(id, "green")}
                        />

                        <div
                            className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-yellow-500 border-yellow-500 ${
                                color === "yellow" && "bg-yellow-500"
                            }`}
                            onClick={() => handleColorChange(id, "yellow")}
                        />

                        <div
                            className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-red-500 border-red-500 ${
                                color === "red" && "bg-red-500"
                            }`}
                            onClick={() => handleColorChange(id, "red")}
                        />

                        <img
                            src={cancelImage}
                            className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
                            alt="Cancel"
                            onClick={() => handleDelete(id)}
                        />
                    </>
                )
            }

        </div>
    );
}
