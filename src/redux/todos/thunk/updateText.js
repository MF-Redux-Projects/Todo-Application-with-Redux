import { edited } from "../actions";

const updateText = (todoId, text) => {
    return async (dispatch) => {
        const response = await fetch(`https://lws-fake-product-api.herokuapp.com/todos/${todoId}`, {
            method: "PATCH",
            body: JSON.stringify({
                text,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const todo = await response.json();

        dispatch(edited(todo.id, todo.text));
    };
};

export default updateText;
