
// import shortid from 'shortid'

import Task from "./components/Task"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"

function App() {

  return (
    <div>
     <TaskForm />
     <TaskList />
     <Task />
    </div>
  )
}

export default App
