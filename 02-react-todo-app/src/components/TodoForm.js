import React, { useState } from "react";
import uuid from "uuid";

function TodoForm({ addTodo }){
    useState();
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    // for updating the task property
    function handleTaskInputChange(e){
      setTodo({ ...todo, task: e.target.value })
    }

    function handleSubmit(e){
      e.preventDefault();
        if(todo.task.trim()){
            addTodo({ ...todo, id: uuid.v4() })
        }
    }

    return(
        <form>
            <input
                name="task" 
                type="text" 
                value={todo.task} 
                onChange={ handleTaskInputChange }/>
            <button type="submit" />
        </form>
    )
}

export default TodoForm;