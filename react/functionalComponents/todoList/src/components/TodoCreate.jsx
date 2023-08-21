import React, {useState} from 'react';

const TodoCreate = ({addNewTodo}) => {

    const [todoContent, setTodoContent] = useState("");

    const createHandler = e => {
        e.preventDefault();
        addNewTodo(
            {
                task: todoContent,
                isChecked: false
            }
        );
        setTodoContent("");
    }

    return(
        <div>
            <form onSubmit={createHandler}>
                <input type="text" onChange={e => setTodoContent(e.target.value)}/>
                <button style={{backgroundColor: "lightgrey", margin: "10px"}}>Add</button>
            </form>
        </div>
    )
}

export default TodoCreate;