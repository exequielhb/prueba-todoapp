import { useState } from "react";
import {addTask} from "../features/task/taskSlice";
import { useDispatch } from "react-redux";
import shortid from "shortid";

const TaskForm = () => {
  const [tasks, setTasks] = useState([{
    title: "",
    description: "",
  }]);

  const dispatch = useDispatch();


  const handleSubmmit = (e) => {
    e.preventDefault();

    dispatch(
      addTask({
        ...tasks,
        id: shortid.generate(),
        
      })
    )
  }


    const handleInputChange = (e) => {
        setTasks({
            ...tasks,
            [e.target.name]: e.target.value,
        })

        // const updateTask = [tasks, ...addTask];
        // setTasks(updateTask);

        // setTasks({

        // })
    }

    // const { title, description } = tasks;


  return (
    <>
      <form onSubmit={handleSubmmit} >
        <label>Title: 
        <input onChange={handleInputChange} 
        type="text" 
        name="title" 
        placeholder="Insert your title Task" 
        /></label>

        <label>Description: 
        <textarea name="description" 
        placeholder="Insert your description" 
        onChange={handleInputChange}
        /></label>

        <button type="submit">Add Task</button>
      </form>
    </>
  );
};

export default TaskForm;
