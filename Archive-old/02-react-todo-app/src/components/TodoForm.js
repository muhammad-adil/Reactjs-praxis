import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

// import { uuid } from "uuid";
import { v4 as uuidv4 } from 'uuid';

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
            addTodo({ ...todo, id: uuidv4() });

            // Reset task input
            setTodo({ ...todo, task: "" });
        }
    }

    return(
        <form className="todo-form" onSubmit={handleSubmit}>
            <TextField
                label="Task"
                name="task" 
                type="text" 
                value={todo.task} 
                onChange={ handleTaskInputChange }/>
            <Button type="submit">Submit</Button>
        </form>
    )
}

export default TodoForm;