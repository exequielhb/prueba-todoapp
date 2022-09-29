import { deleteTask } from "../features/task/taskSlice";
import { useDispatch } from "react-redux";

const Task = ({idTask, title, description }) => {
  const dispatch = useDispatch();

  const handleDelete = (idTask) => {
    console.log("id to delete", idTask);
    dispatch(deleteTask(idTask));
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <h3> {idTask} </h3>
      <button onClick={() => handleDelete(idTask)}>Delete</button>
    </div>
  );
};

export default Task;
