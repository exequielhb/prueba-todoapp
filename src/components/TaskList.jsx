import { useSelector } from "react-redux"
import Task from "./Task"

const TaskList = () => {
    const task = useSelector((state) => state.task)

    return <>
        <h1>Total tasks: {task.length} </h1>
        
            {task.map((task) => {
                return <Task key={task.id} idTask={task.id} title={task.title} description={task.description} />
            })}
    </>
}

export default TaskList