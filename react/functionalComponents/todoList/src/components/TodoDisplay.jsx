import React from 'react';

const TodoDisplay = ({todoList, deleteTodo, checkTodo}) => {

    return(
        <div>
            {
                todoList.map((todo, idx)=>{
                    return(
                        <div key={idx} style={{margin:"10px"}}>
                            <span className={todo.isChecked ? "checked" : ""}>{todo.task}</span>
                            <input type="checkbox" onChange={e=> checkTodo(todo)} style={{margin: "10px"}} />
                            <button onClick={e=>deleteTodo(todo.task)} style={{backgroundColor: "tomato", margin: "10px"}}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TodoDisplay;